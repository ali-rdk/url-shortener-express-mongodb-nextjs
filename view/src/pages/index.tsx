import Image from "next/image";
import { Inter } from "next/font/google";
import { Form, UrlTable } from "@/components";
import { store } from "@/app/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col justify-center items-center w-full h-full gap-2">
        <Form />
        <UrlTable />
      </div>
    </Provider>
  );
}
