import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

*{

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #323036;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b5b5b5;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #d4d4d4;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #a8a8a8;
}
::-webkit-scrollbar-track:active {
  background: #ababab;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

    }

    body{

        background-color: #F4F5F5;

    }
`