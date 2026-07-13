import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom";
import {useForgotPassword} from "../hooks/useForgotPassword.ts";
import {ArrowLeftIcon} from "lucide-react";

function ForgotPassword() {
    const { mutate, isPending, error } = useForgotPassword();

    const [email, setEmail] = useState("");

    const validEmail = email !==""
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        mutate({ email });
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

                    </div>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className="text-center">
                            Forgot Password?
                        </Typography>
                        <Typography variant="body2" className="text-center pb-5">
                            Enter your email to receive a verification code.
                        </Typography>

                        <form onSubmit={handleLogin} className="flex flex-col items-center gap-y-5">
                            <TextField
                                required
                                fullWidth
                                name="email"
                                id="email"
                                label="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <CardActions className="justify-center items-center w-full">
                                <button
                                    type="submit"
                                    disabled={ isPending || !validEmail}
                                    className={`w-full rounded-md py-2 text-white transition ${
                                        validEmail
                                            ? "bg-green-800 hover:bg-green-900"
                                            : "bg-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    {isPending ? "Sending..." : "Send Code"}
                                </button>
                            </CardActions>
                        </form>
                        <Link
                            to="/login"
                            className="flex items-center justify-center w-full gap-x-2 rounded-lg  px-4 py-3 text-gray-700 transition-all duration-200  active:scale-95 cursor-pointer"
                        >
                            <ArrowLeftIcon size={14} />
                            <Typography variant="body2">
                                Back to login
                            </Typography>
                        </Link>
                    </CardContent>

                    {error && (
                        <p className="text-red-500 text-center pb-4">{error.message}</p>
                    )}
                </Card>
            </div>

            <div className="fixed bottom-6 left-0 right-0 flex justify-center z-10">
                <p className="text-sm text-gray-700 px-4 py-1 rounded-md">
                    © 2026 Shelfify All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;