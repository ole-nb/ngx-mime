import { Structure } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
export class StructureBuilder {
    constructor(structures, sequences) {
        this.structures = structures;
        this.sequences = sequences;
    }
    build() {
        const structures = [];
        if (this.structures) {
            for (let i = 0; i < this.structures.length; i++) {
                const structure = this.structures[i];
                structures.push(new Structure({
                    id: BuilderUtils.extractId(structure),
                    type: BuilderUtils.extracType(structure),
                    label: structure.label,
                    canvases: structure.canvases,
                    canvasIndex: BuilderUtils.findCanvasIndex(structure.canvases, this.sequences)
                }));
            }
        }
        return structures;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29yZS9idWlsZGVycy9zdHJ1Y3R1cmUuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0IsWUFBb0IsVUFBaUIsRUFBVSxTQUFxQjtRQUFoRCxlQUFVLEdBQVYsVUFBVSxDQUFPO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUFHLENBQUM7SUFFeEUsS0FBSztRQUNILE1BQU0sVUFBVSxHQUFnQixFQUFFLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsVUFBVSxDQUFDLElBQUksQ0FDYixJQUFJLFNBQVMsQ0FBQztvQkFDWixFQUFFLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLElBQUksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztvQkFDeEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO29CQUN0QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7b0JBQzVCLFdBQVcsRUFBRSxZQUFZLENBQUMsZUFBZSxDQUN2QyxTQUFTLENBQUMsUUFBUSxFQUNsQixJQUFJLENBQUMsU0FBUyxDQUNmO2lCQUNGLENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZSwgU2VxdWVuY2UgfSBmcm9tICcuLi9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgQnVpbGRlclV0aWxzIH0gZnJvbSAnLi9idWlsZGVyLXV0aWxzJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZXM6IGFueVtdLCBwcml2YXRlIHNlcXVlbmNlczogU2VxdWVuY2VbXSkge31cblxuICBidWlsZCgpOiBTdHJ1Y3R1cmVbXSB7XG4gICAgY29uc3Qgc3RydWN0dXJlczogU3RydWN0dXJlW10gPSBbXTtcbiAgICBpZiAodGhpcy5zdHJ1Y3R1cmVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RydWN0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzdHJ1Y3R1cmUgPSB0aGlzLnN0cnVjdHVyZXNbaV07XG4gICAgICAgIHN0cnVjdHVyZXMucHVzaChcbiAgICAgICAgICBuZXcgU3RydWN0dXJlKHtcbiAgICAgICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKHN0cnVjdHVyZSksXG4gICAgICAgICAgICB0eXBlOiBCdWlsZGVyVXRpbHMuZXh0cmFjVHlwZShzdHJ1Y3R1cmUpLFxuICAgICAgICAgICAgbGFiZWw6IHN0cnVjdHVyZS5sYWJlbCxcbiAgICAgICAgICAgIGNhbnZhc2VzOiBzdHJ1Y3R1cmUuY2FudmFzZXMsXG4gICAgICAgICAgICBjYW52YXNJbmRleDogQnVpbGRlclV0aWxzLmZpbmRDYW52YXNJbmRleChcbiAgICAgICAgICAgICAgc3RydWN0dXJlLmNhbnZhc2VzLFxuICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJ1Y3R1cmVzO1xuICB9XG59XG4iXX0=