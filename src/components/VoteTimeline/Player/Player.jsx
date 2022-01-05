import './Player.css';

export const Player = ({player}) => {
  return (
    <div className="player">
      <img src={player.img} alt={player.display} />
      <span>{player.display}</span>
    </div>
  );
}
