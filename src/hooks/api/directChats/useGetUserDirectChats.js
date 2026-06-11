import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getUserDirectChats } from "../../../services/directChat/directChat.service"

export const useGetUserDirectChats = () => {
  return useQuery({
    queryKey: queryKeys.directChat.list(),
    queryFn: getUserDirectChats
  });
};