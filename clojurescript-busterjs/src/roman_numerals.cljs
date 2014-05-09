(ns roman-numerals)

(enable-console-print!)

(defn ^:export decimal-to-roman [d]
	(str 
	  (get ["" "X" "XX" "XXX" "XL" "L" "LX" "LXX" "LXXX" "XC" "C"] (int (/ d 10)))
	  (get ["" "I" "II" "III" "IV" "V" "VI" "VII" "VIII" "IX"] (mod d 10))
	)
  
)

(defn -main [& args]
  (println (decimal-to-roman (first args))))

(set! *main-cli-fn* -main)
