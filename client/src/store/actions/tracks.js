import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTracksSuccess = tracks => {
  console.log(tracks);
  return {
    type: actionTypes.LOAD_TRACK_DATA_SUCCESS,
    tracks: tracks
  };
};

export const loadTracksFailure = () => {
  return {
    type: actionTypes.LOAD_TRACK_DATA_FAILURE
  };
};

export const loadTracksData = term => {
  console.log('Load Track Data Action HIT');
  console.log(term);
  return dispatch => {
    spotifyApi.searchTracks(term, (err, data) => {
      if (data) {
        dispatch(loadTracksSuccess(data.tracks.items));
      }
    });
  };
};

export const loadTopTracksSuccess = topTracks => {
  console.log(topTracks);
  return {
    type: actionTypes.LOAD_TOP_TRACKS_DATA_SUCCESS,
    topTracks: topTracks
  };
};

export const loadTopTracksFailure = () => {
  return {
    type: actionTypes.LOAD_TOP_TRACKS_DATA_FAILURE
  };
};

export const loadTopTracksData = () => {
  console.log('Load Top Track Data Action HIT');
  return dispatch => {
    spotifyApi.getMyTopTracks((err, data) => {
      if (data) {
        console.log(data);
        dispatch(loadTopTracksSuccess(data));
      }
    });
  };
};
