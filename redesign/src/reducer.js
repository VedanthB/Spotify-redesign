// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  token: 'BQDCqbmHDNwZjc4RZQHaP2ew7qRKSZ92901g6R9EtoAiLRS4gHJu7VS6d04oz7IDxfwspbo5n2u6PflaO-gbsOgA0pYeHMmkOxn6p6MTFvfHX8dsBqBpEEeahLYVC553nSMEo2aWF8hFEDkdB_6kNDx5IN99zXxdJs342n2bX02f51V5jpZx-vJQX6lezyAZ-1EhjC9hEkS4fwDXA9SmBCMu8lV_RLIqQkbMy7xLP_nu_iygeLmmdGuZleHV-towlz9wxPwRycNv8hYXSunXXKurqALUK9XqB2QN8OL9CFRf',
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;