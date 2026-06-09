import { useQuery } from "@tanstack/react-query";
import { directChatService } from "../../../services/directChat.service";
import { queryKeys } from "../../../queryKeys";

export const useGetUserDirectChats = () => {
  return useQuery({
    queryKey: queryKeys.directChat.list(),
    queryFn: directChatService.getUserDirectChats
  });
};