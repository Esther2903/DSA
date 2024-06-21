/*
 * Create an array to store n elements of type Int8, Int16, Int32 or Float64.
 * Do not use the regular JS array! Look into binary arrays.
 */
export const createArray = (type, size) => {
    if(type==="Int8") {
        let int8Array = new Int8Array(size);
        return int8Array;
    }
    else if(type==="Int16") {
        let int16Array = new Int16Array(size);
        return int16Array;
    }
    else if(type==="Int32") {
        let int32Array = new Int32Array(size);
        return int32Array;
    }
    else if(type==="Float64") {
        let float64Array = new Float64Array(size);
        return float64Array;
    }
}

