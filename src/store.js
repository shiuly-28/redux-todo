import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice.js';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

// import React, { useState } from 'react';
// import { CreditCard, Smartphone, Building, Wallet, Plus, ArrowLeft } from 'lucide-react';
//
// export default function AddMoneyUI() {
//     const [selectedAmount, setSelectedAmount] = useState(null);
//     const [customAmount, setCustomAmount] = useState('');
//     const [selectedMethod, setSelectedMethod] = useState(null);
//     const [currentBalance, setCurrentBalance] = useState(2450);
//
//     const quickAmounts = [100, 500, 1000, 2000, 5000, 10000];
//
//     const paymentMethods = [
//         { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, color: 'bg-blue-500' },
//         { id: 'mobile', name: 'Mobile Banking', icon: Smartphone, color: 'bg-green-500' },
//         { id: 'bank', name: 'Bank Transfer', icon: Building, color: 'bg-purple-500' },
//         { id: 'wallet', name: 'Other Wallet', icon: Wallet, color: 'bg-orange-500' }
//     ];
//
//     const handleAmountSelect = (amount) => {
//         setSelectedAmount(amount);
//         setCustomAmount('');
//     };
//
//     const handleCustomAmountChange = (e) => {
//         const value = e.target.value;
//         if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0)) {
//             setCustomAmount(value);
//             setSelectedAmount(null);
//         }
//     };
//
//     const getSelectedAmountValue = () => {
//         return selectedAmount || parseInt(customAmount) || 0;
//     };
//
//     const handleAddMoney = () => {
//         if (getSelectedAmountValue() > 0 && selectedMethod) {
//             alert(`Adding ৳${getSelectedAmountValue()} via ${paymentMethods.find(m => m.id === selectedMethod)?.name}`);
//         }
//     };
//
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//             <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
//                     <div className="flex items-center justify-between mb-4">
//                         <ArrowLeft className="w-6 h-6 cursor-pointer hover:opacity-80" />
//                         <h1 className="text-xl font-bold">Add Money</h1>
//                         <div></div>
//                     </div>
//                     <div className="text-center">
//                         <p className="text-blue-100 text-sm">Current Balance</p>
//                         <p className="text-2xl font-bold">৳{currentBalance.toLocaleString()}</p>
//                     </div>
//                 </div>
//
//                 <div className="p-6 space-y-6">
//                     {/* Amount Selection */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Amount</h3>
//
//                         {/* Quick Amount Buttons */}
//                         <div className="grid grid-cols-3 gap-3 mb-4">
//                             {quickAmounts.map((amount) => (
//                                 <button
//                                     key={amount}
//                                     onClick={() => handleAmountSelect(amount)}
//                                     className={`p-3 rounded-lg border-2 transition-all ${
//                                         selectedAmount === amount
//                                             ? 'border-blue-500 bg-blue-50 text-blue-600'
//                                             : 'border-gray-200 hover:border-gray-300'
//                                     }`}
//                                 >
//                                     <span className="text-sm font-medium">৳{amount}</span>
//                                 </button>
//                             ))}
//                         </div>
//
//                         {/* Custom Amount Input */}
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 value={customAmount}
//                                 onChange={handleCustomAmountChange}
//                                 placeholder="Enter custom amount"
//                                 className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
//                             />
//                             <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
//                 ৳
//               </span>
//                         </div>
//                     </div>
//
//                     {/* Payment Methods */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Payment Method</h3>
//                         <div className="space-y-3">
//                             {paymentMethods.map((method) => {
//                                 const Icon = method.icon;
//                                 return (
//                                     <button
//                                         key={method.id}
//                                         onClick={() => setSelectedMethod(method.id)}
//                                         className={`w-full p-4 rounded-lg border-2 flex items-center space-x-4 transition-all ${
//                                             selectedMethod === method.id
//                                                 ? 'border-blue-500 bg-blue-50'
//                                                 : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
//                                         }`}
//                                     >
//                                         <div className={`w-10 h-10 ${method.color} rounded-full flex items-center justify-center`}>
//                                             <Icon className="w-5 h-5 text-white" />
//                                         </div>
//                                         <span className="text-gray-800 font-medium">{method.name}</span>
//                                     </button>
//                                 );
//                             })}
//                         </div>
//                     </div>
//
//                     {/* Summary */}
//                     {getSelectedAmountValue() > 0 && (
//                         <div className="bg-gray-50 rounded-lg p-4">
//                             <div className="flex justify-between items-center mb-2">
//                                 <span className="text-gray-600">Amount to Add:</span>
//                                 <span className="text-lg font-semibold text-gray-800">৳{getSelectedAmountValue()}</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">New Balance:</span>
//                                 <span className="text-lg font-semibold text-green-600">
//                   ৳{(currentBalance + getSelectedAmountValue()).toLocaleString()}
//                 </span>
//                             </div>
//                         </div>
//                     )}
//
//                     {/* Add Money Button */}
//                     <button
//                         onClick={handleAddMoney}
//                         disabled={getSelectedAmountValue() === 0 || !selectedMethod}
//                         className={`w-full p-4 rounded-lg font-semibold text-white transition-all ${
//                             getSelectedAmountValue() > 0 && selectedMethod
//                                 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95'
//                                 : 'bg-gray-300 cursor-not-allowed'
//                         }`}
//                     >
//                         <div className="flex items-center justify-center space-x-2">
//                             <Plus className="w-5 h-5" />
//                             <span>Add Money</span>
//                         </div>
//                     </button>
//
//                     {/* Security Note */}
//                     <div className="text-center text-xs text-gray-500">
//                         <p>🔒 Your payment information is secure and encrypted</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }