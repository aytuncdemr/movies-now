import Header from "@/components/generalcomponents/Header";
import "./globals.css";
import Footer from "@/components/generalcomponents/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Movies Now",
    description: "Learn about movies",
    keywords: "movies,actors",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <Header></Header>
                
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}

