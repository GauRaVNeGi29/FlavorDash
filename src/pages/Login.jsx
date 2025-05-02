import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorOccurred, setErrorOccurred] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { email, password });
      if (res.data === "exist") {
        navigate("/");
      } else if (res.data === "notexist") {
        setErrorMessage("User is not signed up");
        setErrorOccurred(true);
      }
    } catch (error) {
      setErrorMessage("Wrong details");
      setErrorOccurred(true);
      console.error(error);
    }
  };

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex items-center justify-center h-screen">
          <Card className={`w-[400px] ${errorOccurred ? 'border border-red-500' : ''}`}>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 item-start space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2 grid gap-2 item-start space-y-2 mt-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSubmit}>
                Login
              </Button>
            </CardFooter>
            {errorMessage && (
              <p className="text-red-500 mb-2">{errorMessage}</p>
            )}
            <p className="mb-2 text-center">Or you can create an account</p>
            <div className="flex justify-center">
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
            </div>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
