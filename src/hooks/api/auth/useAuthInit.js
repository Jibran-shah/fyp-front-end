import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { getMe } from "../../../services/auth/auth.service";
import { setUser, setAuthLoading } from "../../../store/slices/ui.slice";
import { queryKeys } from "../../../utils/queryKeys";

export const useAuthInit = () => {
  const dispatch = useDispatch();

  const meQuery = useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getMe,
    retry: false,
    refetchOnWindowFocus: false
  });

  // loading state
  useEffect(() => {
    dispatch(setAuthLoading(meQuery.isLoading));
  }, [meQuery.isLoading]);

  // success → set user
  useEffect(() => {
    if (meQuery.data?.data?.user) {
      dispatch(setUser(meQuery.data.data.user));
    }
  }, [meQuery.data]);

  // failure → clear user
  useEffect(() => {
    if (meQuery.isError) {
      dispatch(setUser(null));
    }
  }, [meQuery.isError]);
};