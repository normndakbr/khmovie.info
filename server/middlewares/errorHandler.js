module.exports = function (err, request, response, next) {
    let status = null
    let name = err.name

    switch (name) {
        case "EmptyUsername":
            status = 400;
            message = "Username field cannot be empty!";
            break;

        case "EmptyPassword":
            status = 400;
            message = "Password field cannot be empty!";
            break;

        case "InvalidUsernamePassword":
            status = 400;
            message = "Username or Password is Invalid!";
            break;

        case "AuthenticationFailed":
            status = 401;
            message = "Authentication failed!"
            break;

        case "Unauthorized":
            status = 403;
            message = "Unauthorized action!"
            break;

        case "NotFound":
            status = 404;
            message = "Data not found!"
            break;

        case "UserNotFound":
            status = 404;
            message = "User not found!"
            break;

        default:
            status = 500;
            message = "Internal Server Error!"
    }

    response.status(status).json({ message });
}