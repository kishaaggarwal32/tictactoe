const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = gamingBoard.squares.every(
    squareValue => squareValue !== null
  );
  const nextPlayer = gamingBoard.isXNext ? 'X' : '0';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">0</span> and{' '}
          <span className="text-green">X </span>tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          nextPlayer is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
