def reverser(str, &prc)
    prc.call(str.reverse)
end

def word_changer(str, &prc)
    str.split(" ").map(&prc).join(" ")
end

def greater_proc_value(num, proc1, proc2)
    proc1_val = proc1.call(num)
    proc2_val = proc2.call(num)

    if proc1_val > proc2_val
        return proc1_val
    else
        return proc2_val
    end
end

def and_selector(arr, proc1, proc2)
    arr.select(&proc1).select(&proc2)
end

def alternating_mapper(arr, proc1, proc2)
    arr.map.with_index do |el, i|
        if i.even?
            proc1.call(el)
        else
            proc2.call(el)
        end
    end
end