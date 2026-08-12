'use client'

import { useState, useEffect } from 'react'
import { X, Upload, Check } from 'lucide-react'

interface MediaFile {
  _id: string
  filename: string
  url: string
  size: number
  type: string
  uploadedAt: string
}

interface MediaSelectorProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  selectedUrl?: string
}

export default function MediaSelector({ isOpen, onClose, onSelect, selectedUrl }: MediaSelectorProps) {
  const [files, setFiles] = useState<MediaFile[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      fetchFiles()
    }
  }, [isOpen])

  const fetchFiles = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/media')
      if (response.ok) {
        const data = await response.json()
        setFiles(data.files || [])
      }
    } catch (error) {
      console.error('Failed to fetch media files:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFiles = event.target.files
    if (!uploadFiles) return

    setUploading(true)
    try {
      const uploadPromises = Array.from(uploadFiles).map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)
        return fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
      })

      await Promise.all(uploadPromises)
      fetchFiles() // Refresh the list
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setUploading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Select Media</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Upload Section */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors">
              <Upload className="w-4 h-4" />
              {uploading ? 'Uploading...' : 'Upload Images'}
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
            <span className="text-sm text-gray-600">
              Upload new images to your media library
            </span>
          </div>
        </div>

        {/* Media Grid */}
        <div className="p-6 overflow-y-auto max-h-96">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No images found. Upload some images to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {files
                .filter(file => file.type.startsWith('image/'))
                .map((file) => (
                  <div
                    key={file._id}
                    className={`relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedUrl === file.url
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => onSelect(file.url)}
                  >
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={file.url}
                        alt={file.filename}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Selected indicator */}
                    {selectedUrl === file.url && (
                      <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Select</span>
                    </div>
                    
                    {/* Filename */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                      <p className="text-xs truncate">{file.filename}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={!selectedUrl}
          >
            Select Image
          </button>
        </div>
      </div>
    </div>
  )
}