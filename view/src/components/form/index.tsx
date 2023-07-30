import { getDataService, shortenService } from "@/api/services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setUrls } from "@/features/urlSlice";

const schema = yup.object({
  url: yup.string().required(),
});

export const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const submitHandler = async (data: { url: string }) => {
    await shortenService(data);
    getDataService().then((res) => {
      dispatch(setUrls(res.allUrls));
    });
  };
  return (
    <form
      className="flex flex-col gap-2 w-1/4 items-center mt-[10rem]"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        type="url"
        placeholder="Enter URL here"
        className="w-full p-1 border border-gray-400 rounded-md outline-1 outline-blue-400"
        {...register("url")}
      />
      <button
        type="submit"
        className="bg-blue-500 w-full rounded-md p-1 text-slate-100"
      >
        shorten the URL
      </button>
    </form>
  );
};
