import { jwtDecode } from "jwt-decode";
import { SessionStatusEnum } from "./SessionStateInterface";
import tokenStorage from "./tokenStorage";
import { useStatusSession } from "./useStatusSession";
import { NextRouter, useRouter } from "next/router";

export enum Authorities {
  MANAGER = "MANAGER",
  DELIVERER = "DELIVERER",
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export const useRedirectToMainPage = () => {
  const status = useStatusSession();
  const router = useRouter();
  if (status == SessionStatusEnum.Ready) {
    const token = tokenStorage.getToken();
    if (typeof token === "string") {
      const decoded = jwtDecode<{
        authorities: string[];
        sub: string;
        iat: number;
        exp: number;
      }>(token);
      changePage(decoded.authorities[0], router);
    }
  }
};

function changePage(authority: string, router: NextRouter) {
  switch (authority) {
    case Authorities.MANAGER:
      router.push("/manager-panel");
      break;
    case Authorities.DELIVERER:
      router.push("/deliverer-panel");
      break;
    case Authorities.ADMIN:
      router.push("/admin-panel");
      break;
    case Authorities.CUSTOMER:
      router.push("/customer-panel");
      break;
    default:
      break;
  }
}
