//calculating when easter is on the detected year: this doesnt work on march but i have a different one
e1 = (YEAR % 19) + 1
if (e1 == 1) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 14
} else if (e1 == 2) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 3
} else if (e1 == 3) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 23
} else if (e1 == 4) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 11
} else if (e1 == 5) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 31
} else if (e1 == 6) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 18
} else if (e1 == 7) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 8
} else if (e1 == 8) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 28
} else if (e1 == 9) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 16
} else if (e1 == 10) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 5
} else if (e1 == 11) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 25
} else if (e1 == 12) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 13
} else if (e1 == 13) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 2
} else if (e1 == 14) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 22
} else if (e1 == 15) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 10
} else if (e1 == 16) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 30
} else if (e1 == 17) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 17
} else if (e1 == 18) {
var EASTERMONTH = 4
var CLOSEEASTERDAY = 7
} else if (e1 == 19) {
var EASTERMONTH = 3
var CLOSEEASTERDAY = 27
} else {
var EASTERMONTH = 0
var CLOSEEASTERDAY = 0
}
if (EASTERMONTH == 0) {
var ISEASTER = "ERROR"
} else if (MONTH == EASTERMONTH && DAY == 7) {
if ((DATE - CLOSEEASTERDAY) < 7) {
var ISEASTER = "True"
} else {
var ISEASTER = "False"
}
} else {
var ISEASTER = "False"
}
