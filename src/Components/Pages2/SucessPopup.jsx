import { CheckCircle } from 'lucide-react'
import React from 'react'

const SucessPopup = ({showPopup , setShowPopup}) => {
  return (
    <div>
       {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white animate-in fade-in duration-300">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-in zoom-in-50 duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Success!</h3>
              <p className="text-muted-foreground">
                Your form has been submitted successfully. We'll get back to you soon.
              </p>
              <button onClick={() => setShowPopup(false)} className="mt-4 w-full bg-black text-white py-[6px]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SucessPopup
