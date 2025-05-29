import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				console.log(credentials);
				const user = { user: "@johndoe", id: '123', role: 'admin' }; // Replace with your user fetching logic

				if (user) {
					return user;
				}
				return null;
			},
		}),
	],

	pages: {
		signIn: "/",
	},

	session: {
		strategy: "jwt", // or 'database' if you use sessions table
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = user.id;
			}
			return token;
		},

		async session({ session, token }) {
			session.user = {
				name: token.id as string,
				email: token.role as string
			}

			return session;
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
}