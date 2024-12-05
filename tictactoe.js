        document.getElementById('rollDiceButton').addEventListener('click', async function() {
          const diceButton = document.getElementById('rollDiceButton');
          diceButton.style.display = "none";
          const resultDiv = document.getElementById('result');
          const symbols = ["\\circ", "\\times", "\\And", "\\ast", "\\boxtimes", "\\cap", "\\wr", "\\circledast", "\\Cup", "\\curlyvee", "\\doublebarwedge", "\\gtrdot", "\\intercal", "\\perp", "\\phi", "\\sigma", "\\ltimes",
                          "\\lor", "\\cup", "\\curlywedge", "\\divideontimes", "\\leftthreetimes", "\\lhd", "\\pm", "\\rtimes", "\\sqcap", "\\veebar", "\\approx", "\\bowtie", "\\between", "\\eta", "\\cong",
                          "\\Doteq", "\\in", "\\ggg", "\\gg", "\\frown", "\\eqcirc", "\\models", "\\varnothing", "\\pitchfork", "\\propto", "\\smallsmile", "\\supseteqq", "\\Supset", "\\supset", "\\succapprox", "\\gamma",
                          "\\sqsubseteq", "\\sqsupseteq", "\\subseteq", "\\succ", "\\ntrianglelefteq", "\\ntrianglerighteq", "\\nvdash", "\\nVDash", "\\precnapprox", "\\circlearrowleft", "\\circlearrowright", "\\mu",
                          "\\leftrightsquigarrow", "\\nLeftrightarrow", "\\leadsto", "\\nwarrow", "\\LaTeX", "\\dagger", "\\circledR", "\\natural", "\\flat", "\\sharp", "\\maltese", "\\kappa", "\\varrho", "\\varpi"
                          ];
          resultDiv.innerHTML = '';
          let counter = 0;
          const interval = setInterval(() => {
            const symbol = "$".concat(symbols[Math.floor(Math.random() * symbols.length)], "$");
            resultDiv.innerHTML = symbol;
            MathJax.typeset();
            counter++;
            if (counter >= 45) {
              clearInterval(interval);
              const finalNumber = symbols[Math.floor(Math.random() * 2)]
              const continueButton = document.getElementById('continue');
              const content = document.getElementById('mainContent');
              continueButton.style.display = "block";
              resultDiv.innerHTML = "$".concat(finalNumber, "$");
              continueButton.innerHTML = "Press here to continue";
              content.innerHTML = `You will play as ${finalNumber === '\\circ' ? '$\\circ$' : '$\\times$'}.<br />You will go ${finalNumber === '\\circ' ? 'second' : 'first'}.`;
              MathJax.typeset();
            }
          }, 90);
        });

        document.getElementById('continue').addEventListener('click', async function() {
          const continueButton = document.getElementById('continue');
          const resultDiv = document.getElementById('result');
          const content = document.getElementById('mainContent');
          content.style.fontSize = "26pt"
          continueButton.style.display = "none";
          resultDiv.style.display = "none";
          
          let board = ['', '', '', '', '', '', '', '', ''];
          let currentPlayer = resultDiv.innerHTML === '$\\circ$' ? '\\circ' : '\\times';
          let exit = 0;

          function updateBoard() {
            let matrix = `\\begin{array}{c:c:c}
                          ${board[0]} & ${board[1]} & ${board[2]} \\\\
                          \\hdashline
                          ${board[3]} & ${board[4]} & ${board[5]} \\\\
                          \\hdashline
                          ${board[6]} & ${board[7]} & ${board[8]}
                          \\end{array}`;
            content.innerHTML = matrix;
            MathJax.typeset();
          }

          // find wins by checking win patterns
          function checkWinOrDraw() {
            const winPatterns = [
              [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
              [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
              [0, 4, 8], [2, 4, 6] // diag
            ];

            for (let pattern of winPatterns) {
              if (board[pattern[0]] && board[pattern[0]] === board[pattern[1]] && board[pattern[0]] === board[pattern[2]]) {
                content.innerHTML = `Player ${board[pattern[0]]} wins!`;
                exit = 1;
                return;
              }
            }

            if (!board.includes('')) {
              content.innerHTML = "It's a draw!";
              exit = 1;
            }
          }

          // handle player moves
          function handleMove(index) {
            if (board[index] === '' && !exit) {
              board[index] = currentPlayer;
              checkWinOrDraw();
              if (!exit) {
                currentPlayer = currentPlayer === '\\circ' ? '\\times' : '\\circ';
              }
              updateBoard();
            }
          }

          updateBoard();

          // player input
          for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', () => handleMove(i));
            content.appendChild(cell);
          }
        });