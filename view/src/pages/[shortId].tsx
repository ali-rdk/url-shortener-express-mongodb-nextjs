/* eslint-disable react-hooks/rules-of-hooks */
import { redirectService } from "@/api/services";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const redirectPage = () => {
  const router = useRouter();
  const destination = router.query.shortId;
  redirectService(destination)
    .then((res) => {
      router.push(res.destination);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default redirectPage;
