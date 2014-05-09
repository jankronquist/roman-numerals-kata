(ns roman-numerals)

(enable-console-print!)

(defn decimal-to-roman-digit [d one five ten]
  (get ["" one (str one one) (str one one one) (str one five) five (str five one) (str five one one) (str five one one one) (str one ten)] d))



(defn ^:export decimal-to-roman [d]
	(str
    (decimal-to-roman-digit (int (/ (mod d 10000) 1000)) "M" "V̄" "X̄")
    (decimal-to-roman-digit (int (/ (mod d 1000) 100)) "C" "D" "M")
    (decimal-to-roman-digit (int (/ (mod d 100) 10)) "X" "L" "C")
    (decimal-to-roman-digit (int (/ (mod d 10) 1)) "I" "V" "X")
	)
)

(defn ^:export roman-to-decimal [d]
	(count (filter (fn [c] (= c \I)) (seq d)))
  )

(defn -main [& args]
  (println (decimal-to-roman (first args))))

(set! *main-cli-fn* -main)
