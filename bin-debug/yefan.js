var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var yefan = (function () {
    function yefan() {
    }
    yefan.init = function () {
        var timeArr = {
            "status_code": 200,
            "message": "Success",
            "data": {
                "user": {
                    "nickname": "test",
                    "lable": ["非常棒     ", "        很赞啊 "],
                    "mobile": "18702602037",
                    "signature": "爱仕达跨行大俗快点哈科技时代哈市科",
                    "service_time": 100,
                    "url_portrait": "http:\/\/eimage.lenovo.com.cn\/lsm\/xiaoxin\/portrait\/8709d17a-8dc6-3885-a929-fb229f1d3c94.jpg",
                    "url_voice": "http:\/\/eimage.lenovo.com.cn\/lsm\/xiaoxin\/voice\/8fcc72bc-60cc-3c11-aff2-c4895ab8e814.ogg"
                },
                "arrange": {
                    "星期三 (05\/30)": [{
                            "id": 2489,
                            "start_time": "10:00",
                            "end_time": "11:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2493,
                            "start_time": "12:00",
                            "end_time": "13:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2497,
                            "start_time": "13:30",
                            "end_time": "15:00",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2501,
                            "start_time": "15:00",
                            "end_time": "16:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2505,
                            "start_time": "16:00",
                            "end_time": "17:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2509,
                            "start_time": "18:00",
                            "end_time": "19:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2513,
                            "start_time": "19:30",
                            "end_time": "21:00",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2517,
                            "start_time": "21:00",
                            "end_time": "22:30",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }, {
                            "id": 2521,
                            "start_time": "22:30",
                            "end_time": "00:00",
                            "arrange_time": "2018-05-30",
                            "status": 1
                        }],
                    "星期二 (05\/29)": [{
                            "id": 2917,
                            "start_time": "12:00",
                            "end_time": "13:30",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2921,
                            "start_time": "13:30",
                            "end_time": "15:00",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2925,
                            "start_time": "15:00",
                            "end_time": "16:30",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2929,
                            "start_time": "16:00",
                            "end_time": "17:30",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2933,
                            "start_time": "18:00",
                            "end_time": "19:30",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2937,
                            "start_time": "19:30",
                            "end_time": "21:00",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2941,
                            "start_time": "21:00",
                            "end_time": "22:30",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }, {
                            "id": 2945,
                            "start_time": "22:30",
                            "end_time": "00:00",
                            "arrange_time": "2018-05-29",
                            "status": 1
                        }]
                }
            }
        };
        var obj = [];
        var timeKeys = [];
        var childrenItems = [];
        var arrange = timeArr.data.arrange;
        for (var timeKey in arrange) {
            timeKeys.push(timeKey);
            var items = [];
            for (var i = 0; i < arrange[timeKey].length; i++) {
                var objItem = { label: arrange[timeKey][i].start_time, value: arrange[timeKey][i].id };
                items.push(objItem);
            }
            childrenItems.push(items);
        }
        for (var i = 0; i < timeKeys.length; i++) {
            var objItem = { label: timeKeys[i], children: childrenItems[i] };
            obj.push(objItem);
        }
        console.log(obj);
    };
    return yefan;
}());
__reflect(yefan.prototype, "yefan");
//# sourceMappingURL=yefan.js.map