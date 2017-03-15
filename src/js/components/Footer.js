import React from "react"

export default class Footer extends React.Component {
    render(){
      const style={
         backgroundColor: '#2f2f2f',
         color: '#fff',
         paddingTop: '40px',
         paddingBottom: '40px',
         marginTop: '20px'
      }
        return(
            <footer style={style} class="text-center">
              <p>Made by 7inEvent <a href="http://www.7inevent.com">7inevent.com</a></p>
            </footer>
        )
    }

}
