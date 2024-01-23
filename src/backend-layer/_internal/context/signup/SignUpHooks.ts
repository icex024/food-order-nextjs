import { useContext } from "react";
import { SignUpContext } from "./SignUpContext";
import { useAppDispatch } from "../../store";
import { sendSignUpRequest } from "./SignUpService";
import { sendSignUpRequestAsync } from "./sendSignUpRequestAsync";
import { setSessionToken } from "../../redux/session/sessionSlice";
import { error } from "console";

export function useUsername(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.username,
    (username: string) => {
      context.setInterfaceState({ ...context.signUpDto, username });
    },
  ];
}

export function useFirstName(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.firstName,
    (firstName: string) => {
      context.setInterfaceState({ ...context.signUpDto, firstName });
    },
  ];
}

export function useLastName(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.lastName,
    (lastName: string) => {
      context.setInterfaceState({ ...context.signUpDto, lastName });
    },
  ];
}

export function useEmail(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.email,
    (email: string) => {
      context.setInterfaceState({ ...context.signUpDto, email });
    },
  ];
}

export function usePassword(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.password,
    (password: string) => {
      context.setInterfaceState({ ...context.signUpDto, password });
    },
  ];
}

export function useCity(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.city,
    (city: string) => {
      context.setInterfaceState({ ...context.signUpDto, city });
    },
  ];
}

export function useStreetNumber(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.streetNumber,
    (streetNumber: string) => {
      context.setInterfaceState({ ...context.signUpDto, streetNumber });
    },
  ];
}

export function useStreetName(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.signUpDto.streetName,
    (streetName: string) => {
      context.setInterfaceState({ ...context.signUpDto, streetName });
    },
  ];
}

export function useSetLonLat() {
  const context = useContext(SignUpContext);

  return (longitude: number, latitude: number) => {
    context.setInterfaceState({ ...context.signUpDto, longitude, latitude });
  };
}

export function usePasswordCheck(): [string, (cnst: string) => void] {
  const context = useContext(SignUpContext);

  return [
    context.passwordCheck,
    (passwordCheck: string) => {
      context.setPasswordCheck(passwordCheck);
    },
  ];
}

export function useSignUp() {
  const dispatch = useAppDispatch();
  const context = useContext(SignUpContext);
  return () => {
    if (context.signUpDto.password === context.passwordCheck) {
      sendSignUpRequest(context.signUpDto)
        .then((response) => {
          dispatch(setSessionToken(response.data.token));
        })
        .catch((error) => {
          alert("Username already taken");
        });
    } else {
      alert("Wrong password!");
    }
  };
}
