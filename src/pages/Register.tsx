import React, {useState} from "react";
import Card from "@mui/material/Card";
import Logo from "../assets/Icons/Logo.tsx";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {useRegister} from "../hooks/useRegister.ts";

function Register() {
    const { mutate, isPending, error } = useRegister();
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const passwordsMatch = password === passwordConfirmation
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    const isPasswordValid =
        hasMinLength &&
        hasUppercase &&
        hasNumber &&
        hasSymbol;
    let passwordError = "";

    if (!hasMinLength) {
        passwordError = "Password must be at least 8 characters.";
    } else if (!hasUppercase) {
        passwordError = "Password must contain at least one uppercase letter.";
    } else if (!hasNumber) {
        passwordError = "Password must contain at least one number.";
    } else if (!hasSymbol) {
        passwordError = "Password must contain at least one special character.";
    } else if (!passwordsMatch) {
        passwordError = "Passwords do not match.";
    }
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const password_confirmation = formData.get('password_confirmation') as string;
        const first_name = formData.get('first_name') as string;
        const last_name = formData.get('last_name') as string;
        mutate({ email, password ,password_confirmation,first_name,last_name});
    };

    return (
        <div className="relative min-h-screen">
            <img
                src="/library2.jpg"
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <Card sx={{ position: "relative", width: 448, borderRadius: 5 }}>
                    <div className="flex flex-col items-center pt-6 gap-2">
                        <Logo className="size-40" />
                    </div>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="text-center">
                            Create Your Account
                        </Typography>
                        <Typography variant="body2" className="text-center pb-5">
                            Enter your details to join our digital sanctuary.
                        </Typography>

                        <form onSubmit={handleRegister} className="flex flex-col items-center gap-y-5">
                            <div className="flex gap-2">
                                <TextField
                                    required
                                    fullWidth
                                    name="first_name"
                                    id="first_name"
                                    label="First Name"
                                    defaultValue="barhom"
                                    type="text"
                                />
                                <TextField
                                    required
                                    fullWidth
                                    name="last_name"
                                    id="last_name"
                                    label="Last Name"
                                    defaultValue="albarhom"
                                    type="text"
                                />
                            </div>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                id="email"
                                label="Email"
                                defaultValue="example@gmail.com"
                                type="email"
                            />

                            <div className="w-full flex flex-col gap-y-5">
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`rounded-md border p-2 ${
                                        passwordsMatch
                                            ? "border-green-500"
                                            : "border-red-500"
                                    }`}


                                />
                                <TextField
                                    required
                                    fullWidth
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    label="Password Confirmation"
                                    type="password"
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                />
                            </div>

                            <CardActions className="justify-center items-center w-full">
                                <button
                                    type="submit"
                                    disabled={!passwordsMatch || isPending || !isPasswordValid}
                                    className={`w-full rounded-md py-2 text-white transition ${
                                            isPasswordValid && passwordsMatch
                                            ? "bg-green-800 hover:bg-green-900"
                                            : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    {isPending ? "Registering..." : "Register"}
                                </button>
                            </CardActions>


                            {passwordError && (
                                <p className="text-red-500 text-sm">
                                    {passwordError}
                                </p>
                            )}

                        </form>
                    </CardContent>

                    {error && (
                        <p className="text-red-500 text-center pb-4">{error.message}</p>
                    )}
                </Card>
            </div>


        </div>
    );
}

export default Register;