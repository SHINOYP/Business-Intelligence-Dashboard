import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Dashbaord from "./components/Dashbaord";
import MultiSelect from "./components/MultiSelect";
import { data_new } from "./Assets/Dataset_small";

function App() {
  const createNewNumber = useCallback(() => {
    const updatedArray: any = data_new.map((item) => ({
      key: item.key,
      number: item.number,
    }));

    return updatedArray;
  }, []);
  const createNewMod3 = useCallback(() => {
    const updatedArray: any = data_new.map((item) => ({
      key: item.key,
      number: item.mod3,
    }));

    return updatedArray;
  }, []);
  const createNewMod4 = useCallback(() => {
    const updatedArray: any = data_new.map((item) => ({
      key: item.key,
      number: item.mod4,
    }));

    return updatedArray;
  }, []);
  const createNewMod5 = useCallback(() => {
    const updatedArray: any = data_new.map((item) => ({
      key: item.key,
      number: item.mod5,
    }));
    return updatedArray;
  }, []);
  const createNewMod6 = useCallback(() => {
    const updatedArray: any = data_new.map((item) => ({
      key: item.key,
      number: item.mod6,
    }));

    return updatedArray;
  }, []);
   
  // const createNewArray=(value:string)=>{
  //  let name:string=value
  //   const updatedArray: any = data_new.map((item) => ({
  //     key: item.key,
  //     number: item.value,
  //   }));

  //   return updatedArray;
  // }
  useEffect(() => {
    const dup = createNewNumber();
    const dup3 = createNewMod3();
    const dup4 = createNewMod4();
    const dup5 = createNewMod5();
    const dup6 = createNewMod6();
    // setNewNumber(createNewArray("number"));
    setNewNumber(dup)
    setMod3(dup3)
    setMod4(dup4)
    setMod5(dup5)
    setMod6(dup6)
  }, [createNewNumber]);

  const [number, setNewNumber] = useState<[]>(createNewNumber());
  const [mod3, setMod3] = useState<[]>(createNewMod3());
  const [mod4, setMod4] = useState<[]>(createNewMod4());
  const [mod5, setMod5] = useState<[]>(createNewMod5());
  const [mod6, setMod6] = useState<[]>(createNewMod6());

  return (
    <div className="App">
      <div className="drop-downs">
      <MultiSelect options={number} name='number' />
      <MultiSelect options={mod3}  name='mod3'/>
      <MultiSelect options={mod4} name='mod4' />
      <MultiSelect options={mod5}  name="mod5" />
      <MultiSelect options={mod6}  name="mod6"/>
      </div>
      <Dashbaord />
    </div>
  );
}

export default App;