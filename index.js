// import React, { useState } from "react";
import {render} from "react-dom";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

// function App() {
//   const [selectedDate, handleDateChange] = useState(new Date());

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <DatePicker value={selectedDate} onChange={handleDateChange} />
//       <TimePicker value={selectedDate} onChange={handleDateChange} />
//       <DateTimePicker value={selectedDate} onChange={handleDateChange} />
//     </MuiPickersUtilsProvider>
//   );
// }
import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

function ControllingProgrammaticallyExample() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState("2018-01-01T00:00:00.000Z");

  return (
    <div className={classes.container}>
      <Button onClick={() => setIsOpen(true)}> Open picker </Button>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
       <DatePicker
        variant="inline"
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        label="Open me from button"
        format="d MMM yyyy"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
    </div>
  );
}


render(<ControllingProgrammaticallyExample />, document.getElementById('root'));