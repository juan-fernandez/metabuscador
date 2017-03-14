import React from "react"

export default class Planner extends React.Component{
    componentDidMount() {
        const {tabella} = this.refs;
        console.log("Mount")

        var data = {};

        data.tableHeader = [
            ['2016-03-06'],
            ['2016-03-07'],
            ['2016-03-08'],
            ['2016-03-09'],
            ['2016-03-10'],
            ['2016-03-11'],
            ['2016-03-12'],
            ['2016-03-13'],
            ['2016-03-14'],
            ['2016-03-15'],
            ['2016-03-16'],
            ['2016-03-17'],
        ];
        data.from = "";

        data.rows = [{
            rowHeader: '<h2 class="table-h"><a href="#">Anfiteatro</a></h2>',
            rowVal: [
                [190, 210, 210, 204, 180, 160]
            ],
            rowDesc: ['Sala completa']
        }, {
            rowHeader: '<h2 class="table-h"><a href="#">Sala de reuniones 1</a></h2>',
            rowVal: [
                [190, 210, 210, 204, 180, 160],
                [190, 210, 210, 204, 180, 140]
            ],
            rowDesc: ['Con material audiovisual', 'Sin material audiovisual']
        }, {
            rowHeader: '<h2 class="table-h"><a href="#">Aula Magna</a></h2>',
            rowVal: [
                [250, 280, 280, 260, 230, 210]
            ],
            rowDesc: ['Sala completa']
        }];
        var hotelrowVal = new Tabella(
            tabella, data);
        hotelrowVal.refreshSize();

    }
    componentWillUnmount(){
        const {tabella} = this.refs;

    }
    render(){
        const style={

        }
        return(
            <div class="tabella-ctr" style={style} ref="tabella">
            </div>
        )
    }
}
