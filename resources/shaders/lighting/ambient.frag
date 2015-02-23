#include <GBuffer.ubo>
#include <Math.glsl>

out highp vec4 fAmbient;

void main()
{
  float linearDepth = linearizeDepth(depth());
  fAmbient = vec4(diffuse(), 1.0) * ambientColor;
  fAmbient = fAmbient * (1.0 - linearDepth) + linearDepth * atmosphericColor;
}