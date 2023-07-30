/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { getDataService } from "@/api/services";
import { setUrls, urlState } from "@/features/urlSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UrlTable = () => {
  // const [urls, setUrls] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const res = getDataService();
    res.then((data) => {
      dispatch(setUrls(data.allUrls));
    });
  }, []);
  const allUrls = useSelector((state: urlState) => state.urls.values);
  console.log(allUrls);
  console.log("ran");

  return (
    <div className="p-2 flex flex-col gap-2 scroll-p-8 h-60 overflow-y-scroll">
      {allUrls.map((item) => {
        return (
          <div className="flex gap-1 h-12 w-full p-2 border border-slate-200 rounded-lg hover:bg-slate-100">
            <a className="hover:text-blue-400" href={`${item.originURL}`}>
              {item.originURL}
            </a>
            /
            <a className="hover:text-blue-400" href={`${item.originURL}`}>
              {item.shortId}
            </a>
          </div>
        );
      })}
    </div>
  );
};
