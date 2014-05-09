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

;VI -> IV

;{:value 0 :char 0} I
;{:value 1 :char 1} V
;{:value 6 :char 5} V


(defn roman-reducer [data c]
  (let [char-value (get {\I 1 \V 5 \X 10 \L 50 \C 100 \D 500 \M 1000} c)
        add-or-sub (if (<= (:char data) char-value) + -)]
      {:value (add-or-sub (:value data) char-value) :char char-value}))

(defn ^:export roman-to-decimal [d]
  (:value (reduce roman-reducer {:value 0 :char 0} (reverse (seq d)))))

(defn -main [& args]
  (println (decimal-to-roman (first args))))

(set! *main-cli-fn* -main)
