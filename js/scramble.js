const moves = ['L', 'R', 'U', 'D', 'M', 'L`', 'R`', 'U`', 'D`', 'M`', 'L2', 'R2', 'U2', 'D2', 'M2'];

const scramble_box = document.getElementById('scramble');

const scramble = () => {
  const sorted_moves = [];

  const isConsecutiveRepetition = (first_move, second_movie) => {
    const regex = /(`|2)?$/;

    const first_clean_move = first_move.replace(regex, '');
    const second_clean_move = second_movie.replace(regex, '');

    return first_clean_move === second_clean_move;
  };

  for(let i = 0; i < 20; i++) {
    let random_move = moves[Math.floor(Math.random() * moves.length)];

    if(i > 0 && isConsecutiveRepetition(sorted_moves[i - 1], random_move)) {
      while(isConsecutiveRepetition(sorted_moves[i - 1], random_move)) {
        random_move = moves[Math.floor(Math.random() * moves.length)];
      }
    }

    if(i > 0 && sorted_moves[i - 1] === random_move) {
      while(sorted_moves[i - 1] === random_move) {
        random_move = moves[Math.floor(Math.random() * moves.length)];
      }
    }

    sorted_moves.push(random_move);
  }

  return sorted_moves;

};

const sorted_moves = scramble().join(' ');

scramble_box.innerHTML = sorted_moves;

