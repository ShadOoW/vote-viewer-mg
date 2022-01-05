import './VoteList.css';
import {Chip, Stack} from "@mui/material";
import { players } from '../../../data/players';

export const VoteList = ({player, currentPostId}) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {player.votes.map((vote) => (
        vote.postId <= currentPostId ? (
          <Chip label={players.find(player => player.id === vote.source).display} color="info" size="small" />
        ) : null
      ))}
    </Stack>
  );
}
