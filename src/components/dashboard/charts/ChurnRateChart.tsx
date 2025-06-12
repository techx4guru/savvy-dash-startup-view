
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', churnRate: 3.2, churnedUsers: 38 },
  { month: 'Feb', churnRate: 2.8, churnedUsers: 35 },
  { month: 'Mar', churnRate: 2.9, churnedUsers: 42 },
  { month: 'Apr', churnRate: 2.6, churnedUsers: 45 },
  { month: 'May', churnRate: 2.1, churnedUsers: 38 },
  { month: 'Jun', churnRate: 2.4, churnedUsers: 48 },
];

export const ChurnRateChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            className="text-xs"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="left"
            className="text-xs"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right"
            className="text-xs"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            formatter={(value: number, name: string) => [
              name === 'churnRate' ? `${value}%` : value,
              name === 'churnRate' ? 'Churn Rate' : 'Churned Users'
            ]}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
            contentStyle={{ 
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Bar 
            yAxisId="left"
            dataKey="churnedUsers" 
            fill="url(#churnBarGradient)" 
            radius={[4, 4, 0, 0]}
            opacity={0.7}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="churnRate" 
            stroke="#f59e0b" 
            strokeWidth={3}
            dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
          />
          <defs>
            <linearGradient id="churnBarGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
