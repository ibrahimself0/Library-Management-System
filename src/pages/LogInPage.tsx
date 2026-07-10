import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import {TextField} from "@mui/material";
import Logo from "../assets/Icons/Logo.tsx";
import {useLogin} from "../hooks/useLogin.ts";


function LoginPage() {

    const { mutate, isPending, error } = useLogin();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        mutate({ email, password });
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
                            Welcome Back
                        </Typography>
                        <Typography variant="body2" className="text-center pb-5">
                            Enter your credentials to access your library.
                        </Typography>

                        <form onSubmit={handleLogin} className="flex flex-col items-center gap-y-5">
                            <TextField
                                required
                                fullWidth
                                name="email"
                                id="email"
                                label="Email"
                                defaultValue="example@gmail.com"
                                type="email"
                            />

                            <div className="w-full">
                                <div className="flex justify-end items-center mb-1 px-1">
                                    <a
                                        href="#"
                                        className="text-sm text-grey hover:text-green-800 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    id="password"
                                    label="Password"
                                    defaultValue="admin1234"
                                    type="password"
                                />
                            </div>

                            <CardActions className="justify-center items-center w-full">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center px-4 py-2 bg-green-800 rounded-md text-white w-full mb-4"
                                    disabled={isPending}
                                >
                                    {isPending ? "Logging in..." : "Login"}
                                </button>
                            </CardActions>
                        </form>
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

export default LoginPage;