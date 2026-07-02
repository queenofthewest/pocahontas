<?php
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["ok" => false, "error" => "Method not allowed"]);
    exit;
}

$to = "victoriawestvip@gmail.com";

function clean($value) {
    $value = trim($value ?? "");
    return str_replace(["\r", "\n"], " ", $value);
}

$name = clean($_POST["name"] ?? "");
$email = clean($_POST["email"] ?? "");
$phone = clean($_POST["phone"] ?? "");
$date = clean($_POST["date"] ?? "");
$duration = clean($_POST["duration"] ?? "");
$location = clean($_POST["location"] ?? "");
$dateType = clean($_POST["dateType"] ?? "");
$verificationType = clean($_POST["verificationType"] ?? "");
$verificationDetail = trim($_POST["verificationDetail"] ?? "");

// Honeypot — if this hidden field is filled, silently pretend success
if (!empty($_POST["website"] ?? "")) {
    echo json_encode(["ok" => true]);
    exit;
}

if ($name === "" || $email === "" || $phone === "" || !filter_var($email, FILTER_VALIDATE_EMAIL) || $verificationDetail === "") {
    http_response_code(422);
    echo json_encode(["ok" => false, "error" => "Missing or invalid required fields"]);
    exit;
}

$host = clean($_SERVER["HTTP_HOST"] ?? "victoriawest.com");
$fromDomain = preg_replace("/^www\./", "", $host);
$from = "no-reply@" . $fromDomain;

$subject = "New Booking Inquiry — $name";

$body = "New booking inquiry received:\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Preferred date: " . ($date !== "" ? $date : "-") . "\n";
$body .= "Duration: " . ($duration !== "" ? $duration : "-") . "\n";
$body .= "Location: " . ($location !== "" ? $location : "-") . "\n";
$body .= "Date type: " . ($dateType !== "" ? $dateType : "-") . "\n";
$body .= "Verification method: " . ($verificationType !== "" ? $verificationType : "-") . "\n";
$body .= "Verification details:\n" . $verificationDetail . "\n";

$headers = [];
$headers[] = "From: $from";
$headers[] = "Reply-To: $email";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(["ok" => true]);
} else {
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "Failed to send"]);
}
