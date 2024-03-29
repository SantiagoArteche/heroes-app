import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/types/types";

describe("Pruebas authReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test("Debe llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        logged: true,
        name: "Santiago",
        id: Date.now(),
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test("Debe llamar el logout borrar el name del usuario y logged en false", () => {
    const state = {
      logged: true,
      user: { id: Date.now(), name: "Santiago" },
    };
    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
