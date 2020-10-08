import React from "react";
import { User as UserT } from "../shared/types/user-type";

type Props = {
  user?: UserT;
};

export default function User(props: Props) {
  return (
    <div>
      <h3>o usuário atual é</h3>

      {!!props.user && (
        <div>
          <span>{props.user.id}</span>
          <p>{props.user.name}</p>
        </div>
      )}

      {!props.user && <p>nenhum usuário encontrado</p>}
    </div>
  );
}
