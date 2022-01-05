import './VoteTimeline.css';
import { useState, useEffect } from "react";
import { Player } from './Player/Player';
import { VotesSlider } from './Slider/Slider';
import { VoteList } from './VoteList/VoteList';
import { players, votes } from '../../data';
import { normalize } from '../../utils/normalize';

export const VoteTimeline = () => {
  const [mark, setMark] = useState(0);
  const [currentPostId, setCurrentPostId] = useState(0);

  useEffect(() => {
    if (mark === 0) {
      setCurrentPostId(0);
    } else {
      setCurrentPostId(votes.sort((a, b) => a.postId - b.postId)[mark - 1].postId);
    }
  }, [mark]);

  const normalizedPlayers = normalize(players, votes);
  return (
    <>
      <VotesSlider handleChange={(_, value) => { setMark(value) }} />
      {normalizedPlayers.map((player) => (
        <div className="players">
          <Player player={player} />
          <VoteList player={player} currentPostId={currentPostId} />
        </div>
      ))}
    </>
  );
}
