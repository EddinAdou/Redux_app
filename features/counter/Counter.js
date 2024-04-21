import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './counterSlice'
import { StatusBar, StyleSheet,TextInput, View} from "react-native";

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [number, onChangeNumber] = useState();
    return (


<View style={styles.container}>
        
<button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <TextInput style={styles.TextInput}
            placeholder='Enter a number'
            onChange={e=>onChangeNumber(parseInt(e.target.value))}
            
        />
        <button disabled={!number || isNaN(number) ? true : false}
          onClick={()=>dispatch(incrementByAmount(number))}
        >

        </button>
</View>    
)

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
})