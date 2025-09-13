"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Phone, Mail, Users, Award, Play, Image as ImageIcon, X } from "lucide-react";

const galleryData = {
  "2023": [
    {
      id: 1,
      type: "image",
      title: "Opening Ceremony 2023",
      thumbnail: "/gallery/2023/opening.jpg",
      category: "Ceremony",
    },
    {
      id: 2,
      type: "video",
      title: "Dandiya Performance 2023",
      thumbnail: "/gallery/2023/dandiya.jpg",
      category: "Performance",
    },
    {
      id: 3,
      type: "image",
      title: "Community Dancing 2023",
      thumbnail: "/gallery/2023/community.jpg",
      category: "Dancing",
    },
    {
      id: 4,
      type: "video",
      title: "Award Ceremony 2023",
      thumbnail: "/gallery/2023/awards.jpg",
      category: "Awards",
    },
  ],
  "2024": [
    {
      id: 5,
      type: "image",
      title: "Welcome Reception 2024",
      thumbnail: "/gallery/2024/welcome.jpg",
      category: "Welcome",
    },
    {
      id: 6,
      type: "video",
      title: "Live Music Performance 2024",
      thumbnail: "/gallery/2024/music.jpg",
      category: "Music",
    },
    {
      id: 7,
      type: "image",
      title: "Traditional Food Setup 2024",
      thumbnail: "/gallery/2024/food.jpg",
      category: "Food",
    },
    {
      id: 8,
      type: "video",
      title: "Closing Ceremony 2024",
      thumbnail: "/gallery/2024/closing.jpg",
      category: "Ceremony",
    },
  ],
  "2025": [
    {
      id: 9,
      type: "image",
      title: "Venue Preparation 2025",
      thumbnail: "/gallery/2025/venue.png",
      category: "Venue",
    },
    {
      id: 10,
      type: "video",
      title: "Rehearsal Highlights 2025",
      thumbnail: "/gallery/2025/rehearsal.png",
      category: "Preparation",
    },
    {
      id: 11,
      type: "image",
      title: "Decorations Setup 2025",
      thumbnail: "/gallery/2025/decorations.jpg",
      category: "Venue",
    },
    {
      id: 12,
      type: "video",
      title: "Sound Check 2025",
      thumbnail: "/gallery/2025/soundcheck.png",
      category: "Technical",
    },
  ],
};

const eventInfo = {
  category: "Marketing",
  date: "January 10, 2025",
  time: "6:30 pm – 9:00 pm",
  phone: "+1 (1234)-567-800",
  location: "New York City",
  venue: "Cineplax Hall",
  email: "info@gmail.com",
  description: "Join us for the most vibrant and exciting Dandiya event of 2025! Experience traditional Gujarati culture with modern entertainment, delicious food, and unforgettable memories.",
  highlights: [
    "Traditional Dandiya Performances",
    "Live Music & Dancing",
    "Authentic Gujarati Cuisine",
    "Community Awards Ceremony",
    "Photo Booth & Memories",
    "Cultural Exhibitions",
  ],
};

export default function EventDetails() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedItem, setSelectedItem] = useState<typeof galleryData["2025"][0] | null>(null);

  const currentGallery = galleryData[selectedYear as keyof typeof galleryData] || [];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Event Details
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Aagam Rass Dandiya 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Event Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Event Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-semibold text-gray-900">{eventInfo.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-semibold text-gray-900">{eventInfo.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-semibold text-gray-900">{eventInfo.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-semibold text-gray-900">{eventInfo.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-semibold text-gray-900">{eventInfo.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-indigo-500" />
                      <div>
                        <p className="text-sm text-gray-500">Venue</p>
                        <p className="font-semibold text-gray-900">{eventInfo.venue}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-semibold text-gray-900">{eventInfo.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Event Description & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    About This Event
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {eventInfo.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Event Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {eventInfo.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Digital Working Events Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This event is part of our Digital Working Events series, designed to 
                    bridge traditional culture with modern technology and community engagement.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Live streaming available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Social media integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Digital photo sharing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Online community engagement</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filterable Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Event Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore photos and videos from our past events and current preparations.
            </p>
          </motion.div>

          <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2025">2025</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedYear} className="space-y-6">
              <motion.div
                key={selectedYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <AnimatePresence>
                  {currentGallery.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <div className="relative h-48 overflow-hidden">
                          <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${item.thumbnail})`,
                            }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              {item.type === "video" ? (
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                                  <Play className="w-8 h-8 text-white" />
                                </div>
                              ) : (
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors">
                                  <ImageIcon className="w-8 h-8 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-gradient-to-r from-red-500 to-purple-500 text-white">
                                {selectedYear}
                              </Badge>
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                {item.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors">
                            {item.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Modal for viewing items */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className="w-full h-96 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${selectedItem.thumbnail})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {selectedItem.type === "video" ? (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <ImageIcon className="w-12 h-12 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-gradient-to-r from-red-500 to-purple-500 text-white">
                    {selectedYear}
                  </Badge>
                  <Badge variant="secondary">{selectedItem.category}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600">
                  {selectedItem.type === "video" 
                    ? "Click to play video" 
                    : "Click to view full image"
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
