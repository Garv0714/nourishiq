import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { District, School } from '../../types';
import { getRiskColor, cn } from '../../lib/utils';
import { StatusBadge } from '../shared/status-badge';

interface HungerHeatmapProps {
  districts: District[];
  schools?: School[];
  compact?: boolean;
}

export default function HungerHeatmap({ districts, schools, compact = false }: HungerHeatmapProps) {
  const center: [number, number] = [22.5, 79.0]; // Centered on India

  return (
    <div className={cn("relative w-full h-full overflow-hidden")}>
      <MapContainer 
        center={center} 
        zoom={compact ? 4 : 5} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={!compact}
        scrollWheelZoom={!compact}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {districts.map((district) => (
          <CircleMarker
            key={district.id}
            center={[district.lat, district.lng]}
            radius={district.riskScore / 4 + 8}
            pathOptions={{
              fillColor: getRiskColor(district.riskLevel),
              fillOpacity: 0.6,
              color: getRiskColor(district.riskLevel),
              weight: 1
            }}
          >
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm mb-1">{district.name}, {district.state}</h3>
                <div className="space-y-1">
                  <div className="flex justify-between gap-4">
                    <span className="text-xs text-muted-foreground">Risk Score:</span>
                    <span className="text-xs font-bold">{district.riskScore}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-xs text-muted-foreground">Attendance:</span>
                    <span className="text-xs font-bold">{district.avgAttendance}%</span>
                  </div>
                  <StatusBadge level={district.riskLevel} trend={district.riskTrend} className="mt-2" />
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}

        {schools && !compact && schools.map((school) => (
          <CircleMarker
            key={school.id}
            center={[school.lat, school.lng]}
            radius={4}
            pathOptions={{
              fillColor: '#FFFFFF',
              fillOpacity: 0.8,
              color: '#FFFFFF',
              weight: 1
            }}
          >
            <Popup>
              <div className="p-1">
                <h4 className="font-bold text-xs">{school.name}</h4>
                <p className="text-[10px] text-muted-foreground">{school.districtName}</p>
                <div className="mt-1 flex justify-between gap-4">
                  <span className="text-[10px]">Risk Score:</span>
                  <span className="text-[10px] font-bold">{school.riskScore}</span>
                </div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      
      <div className="absolute bottom-4 left-4 z-[1000] glass-card p-3 rounded-lg flex flex-col gap-2">
        <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Risk Legend</h5>
        <div className="flex flex-col gap-1.5">
          {[
            { label: 'Critical', color: 'bg-risk-critical' },
            { label: 'High', color: 'bg-risk-high' },
            { label: 'Moderate', color: 'bg-risk-moderate' },
            { label: 'Low', color: 'bg-risk-low' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", item.color)} />
              <span className="text-[10px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


