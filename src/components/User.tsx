import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { User as UserT } from "../shared/types/user-type";
import { AppState } from "../store";
import { getUser, postUser } from "../store/actions/user-actions";

type Props = {
  user?: UserT;
  getUser(): void;
  saveUser(user: UserT): void;
};

export function User(props: Props) {
  const saveUser = () => props.saveUser(props.user as UserT);

  const getUser = () => props.getUser();

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

      <button onClick={saveUser}>salvar usuário</button>
      <button onClick={getUser}>buscar usuário</button>
    </div>
  );
}

const mapState = (state: AppState) => ({
  user: state.user.currentUser,
});

const mapDispatch = (dispatch: Dispatch) => ({
  getUser: () => dispatch(getUser()),
  saveUser: (user) => dispatch(postUser(user)),
});

export default connect(mapState, mapDispatch)(User);
