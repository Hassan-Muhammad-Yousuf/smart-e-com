import type { NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


export const options: NextAuthOptions={
    providers:[
        GithubProvider({
            clientID: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ]
}