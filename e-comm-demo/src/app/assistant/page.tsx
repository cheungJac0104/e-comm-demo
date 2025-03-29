'use client';

import { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, ArrowPathIcon, UserIcon, SparklesIcon, CommandLineIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'ai' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const aiResponses = [
        "I've analyzed your request and here's what I found...",
        "That's an interesting question. Let me think about that...",
        "Based on my knowledge, I would recommend...",
        "Here are three possible solutions to your problem..."
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage = { id: messages.length + 2, text: randomResponse, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedPrompts = [
    "Explain quantum computing in simple terms",
    "Suggest a workout plan for beginners",
    "Help me debug this Python code",
    "Create a meal plan for weight loss"
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <SparklesIcon className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-xl font-bold text-gray-900">AI Assistant</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ArrowPathIcon className="h-4 w-4 mr-1" />
              New Chat
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl rounded-lg px-4 py-3 ${message.sender === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-800'}`}
              >
                <div className="flex items-start">
                  {message.sender === 'ai' && (
                    <SparklesIcon className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-3xl rounded-lg px-4 py-3 bg-white border border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts (when no messages) */}
        {messages.length <= 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-6 max-w-6xl mx-auto">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setInputValue(prompt)}
                className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
              >
                <div className="flex items-center">
                  <LightBulbIcon className="h-5 w-5 text-indigo-500 mr-2" />
                  <span className="text-gray-700">{prompt}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="text-indigo-800 block w-full pr-12 pl-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="submit"
                  disabled={isLoading || inputValue.trim() === ''}
                  className={`p-1 rounded-full ${isLoading || inputValue.trim() === '' 
                    ? 'text-gray-400' 
                    : 'text-indigo-600 hover:bg-indigo-50'}`}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 text-center">
              AI Assistant may produce inaccurate information. Consider verifying important facts.
            </p>
          </form>
        </div>
      </main>

      {/* Features/Sidebar (optional) */}
      <div className="hidden lg:block fixed inset-y-0 right-0 w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Capabilities</h2>
        <div className="space-y-3">
          {[
            { icon: CommandLineIcon, title: "Code Generation", desc: "Write and debug code in multiple languages" },
            { icon: LightBulbIcon, title: "Creative Ideas", desc: "Brainstorm ideas and suggestions" },
            { icon: UserIcon, title: "Personal Advice", desc: "Get recommendations tailored for you" }
          ].map((feature, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <feature.icon className="h-5 w-5 text-indigo-500 mr-2" />
                <h3 className="font-medium text-gray-900">{feature.title}</h3>
              </div>
              <p className="mt-1 text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;