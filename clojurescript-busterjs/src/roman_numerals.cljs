(ns roman-numerals)

(enable-console-print!)

(defn ^:export decimal-to-roman [d]
  (get ["" "I" "II" "III" "IV" "V" "VI" "VII" "VIII" "IX" "X"] d))

(defn -main [& args]
  (println (decimal-to-roman (first args))))

(set! *main-cli-fn* -main)
