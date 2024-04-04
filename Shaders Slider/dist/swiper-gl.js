/**
 * UI Initiative Swiper GL
 *
 * Stunning WebGL image transitions
 *
 * https://uiinitiative.com
 *
 * Copyright 2024 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 * February 05, 2024
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SwiperGL = factory());
})(this, (function () { 'use strict';

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy$4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
    }

    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set$4(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
    }

    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply$3(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
    }

    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
    }

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale$3(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
    }

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        let z = b[2] - a[2];
        return x * x + y * y + z * z;
    }

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        return x * x + y * y + z * z;
    }

    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
    }

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
    }

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize$2(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let len = x * x + y * y + z * z;
        if (len > 0) {
            //TODO: evaluate use of glm_invsqrt here?
            len = 1 / Math.sqrt(len);
        }
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$2(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
        let ax = a[0],
            ay = a[1],
            az = a[2];
        let bx = b[0],
            by = b[1],
            bz = b[2];

        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
    }

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
        let ax = a[0];
        let ay = a[1];
        let az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
    }

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
        let x = a[0],
            y = a[1],
            z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    }

    /**
     * Same as above but doesn't apply translation.
     * Useful for rays.
     */
    function scaleRotateMat4(out, a, m) {
        let x = a[0],
            y = a[1],
            z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
        return out;
    }

    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat3} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */
    function transformMat3(out, a, m) {
        let x = a[0],
            y = a[1],
            z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
    }

    /**
     * Transforms the vec3 with a quat
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
        // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed

        let x = a[0],
            y = a[1],
            z = a[2];
        let qx = q[0],
            qy = q[1],
            qz = q[2],
            qw = q[3];

        let uvx = qy * z - qz * y;
        let uvy = qz * x - qx * z;
        let uvz = qx * y - qy * x;

        let uuvx = qy * uvz - qz * uvy;
        let uuvy = qz * uvx - qx * uvz;
        let uuvz = qx * uvy - qy * uvx;

        let w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;

        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;

        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
    }

    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    const angle = (function () {
        const tempA = [0, 0, 0];
        const tempB = [0, 0, 0];

        return function (a, b) {
            copy$4(tempA, a);
            copy$4(tempB, b);

            normalize$2(tempA, tempA);
            normalize$2(tempB, tempB);

            let cosine = dot$2(tempA, tempB);

            if (cosine > 1.0) {
                return 0;
            } else if (cosine < -1.0) {
                return Math.PI;
            } else {
                return Math.acos(cosine);
            }
        };
    })();

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    class Vec3 extends Array {
        constructor(x = 0, y = x, z = x) {
            super(x, y, z);
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        set x(v) {
            this[0] = v;
        }

        set y(v) {
            this[1] = v;
        }

        set z(v) {
            this[2] = v;
        }

        set(x, y = x, z = x) {
            if (x.length) return this.copy(x);
            set$4(this, x, y, z);
            return this;
        }

        copy(v) {
            copy$4(this, v);
            return this;
        }

        add(va, vb) {
            if (vb) add(this, va, vb);
            else add(this, this, va);
            return this;
        }

        sub(va, vb) {
            if (vb) subtract(this, va, vb);
            else subtract(this, this, va);
            return this;
        }

        multiply(v) {
            if (v.length) multiply$3(this, this, v);
            else scale$3(this, this, v);
            return this;
        }

        divide(v) {
            if (v.length) divide(this, this, v);
            else scale$3(this, this, 1 / v);
            return this;
        }

        inverse(v = this) {
            inverse(this, v);
            return this;
        }

        // Can't use 'length' as Array.prototype uses it
        len() {
            return length(this);
        }

        distance(v) {
            if (v) return distance(this, v);
            else return length(this);
        }

        squaredLen() {
            return squaredLength(this);
        }

        squaredDistance(v) {
            if (v) return squaredDistance(this, v);
            else return squaredLength(this);
        }

        negate(v = this) {
            negate(this, v);
            return this;
        }

        cross(va, vb) {
            if (vb) cross(this, va, vb);
            else cross(this, this, va);
            return this;
        }

        scale(v) {
            scale$3(this, this, v);
            return this;
        }

        normalize() {
            normalize$2(this, this);
            return this;
        }

        dot(v) {
            return dot$2(this, v);
        }

        equals(v) {
            return exactEquals(this, v);
        }

        applyMatrix3(mat3) {
            transformMat3(this, this, mat3);
            return this;
        }

        applyMatrix4(mat4) {
            transformMat4(this, this, mat4);
            return this;
        }

        scaleRotateMatrix4(mat4) {
            scaleRotateMat4(this, this, mat4);
            return this;
        }

        applyQuaternion(q) {
            transformQuat(this, this, q);
            return this;
        }

        angle(v) {
            return angle(this, v);
        }

        lerp(v, t) {
            lerp(this, this, v, t);
            return this;
        }

        clone() {
            return new Vec3(this[0], this[1], this[2]);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            return a;
        }

        transformDirection(mat4) {
            const x = this[0];
            const y = this[1];
            const z = this[2];

            this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
            this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
            this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

            return this.normalize();
        }
    }

    // attribute params

    const tempVec3$1 = new Vec3();

    let ID$4 = 1;
    let ATTR_ID = 1;

    // To stop inifinite warnings
    let isBoundsWarned = false;

    class Geometry {
        constructor(gl, attributes = {}) {
            if (!gl.canvas) console.error('gl not passed as first argument to Geometry');
            this.gl = gl;
            this.attributes = attributes;
            this.id = ID$4++;

            // Store one VAO per program attribute locations order
            this.VAOs = {};

            this.drawRange = { start: 0, count: 0 };
            this.instancedCount = 0;

            // Unbind current VAO so that new buffers don't get added to active mesh
            this.gl.renderer.bindVertexArray(null);
            this.gl.renderer.currentGeometry = null;

            // Alias for state store to avoid redundant calls for global state
            this.glState = this.gl.renderer.state;

            // create the buffers
            for (let key in attributes) {
                this.addAttribute(key, attributes[key]);
            }
        }

        addAttribute(key, attr) {
            this.attributes[key] = attr;

            // Set options
            attr.id = ATTR_ID++; // TODO: currently unused, remove?
            attr.size = attr.size || 1;
            attr.type =
                attr.type ||
                (attr.data.constructor === Float32Array
                    ? this.gl.FLOAT
                    : attr.data.constructor === Uint16Array
                    ? this.gl.UNSIGNED_SHORT
                    : this.gl.UNSIGNED_INT); // Uint32Array
            attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
            attr.normalized = attr.normalized || false;
            attr.stride = attr.stride || 0;
            attr.offset = attr.offset || 0;
            attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
            attr.divisor = attr.instanced || 0;
            attr.needsUpdate = false;
            attr.usage = attr.usage || this.gl.STATIC_DRAW;

            if (!attr.buffer) {
                // Push data to buffer
                this.updateAttribute(attr);
            }

            // Update geometry counts. If indexed, ignore regular attributes
            if (attr.divisor) {
                this.isInstanced = true;
                if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                    console.warn('geometry has multiple instanced buffers of different length');
                    return (this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor));
                }
                this.instancedCount = attr.count * attr.divisor;
            } else if (key === 'index') {
                this.drawRange.count = attr.count;
            } else if (!this.attributes.index) {
                this.drawRange.count = Math.max(this.drawRange.count, attr.count);
            }
        }

        updateAttribute(attr) {
            const isNewBuffer = !attr.buffer;
            if (isNewBuffer) attr.buffer = this.gl.createBuffer();
            if (this.glState.boundBuffer !== attr.buffer) {
                this.gl.bindBuffer(attr.target, attr.buffer);
                this.glState.boundBuffer = attr.buffer;
            }
            if (isNewBuffer) {
                this.gl.bufferData(attr.target, attr.data, attr.usage);
            } else {
                this.gl.bufferSubData(attr.target, 0, attr.data);
            }
            attr.needsUpdate = false;
        }

        setIndex(value) {
            this.addAttribute('index', value);
        }

        setDrawRange(start, count) {
            this.drawRange.start = start;
            this.drawRange.count = count;
        }

        setInstancedCount(value) {
            this.instancedCount = value;
        }

        createVAO(program) {
            this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
            this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
            this.bindAttributes(program);
        }

        bindAttributes(program) {
            // Link all attributes to program using gl.vertexAttribPointer
            program.attributeLocations.forEach((location, { name, type }) => {
                // If geometry missing a required shader attribute
                if (!this.attributes[name]) {
                    console.warn(`active attribute ${name} not being supplied`);
                    return;
                }

                const attr = this.attributes[name];

                this.gl.bindBuffer(attr.target, attr.buffer);
                this.glState.boundBuffer = attr.buffer;

                // For matrix attributes, buffer needs to be defined per column
                let numLoc = 1;
                if (type === 35674) numLoc = 2; // mat2
                if (type === 35675) numLoc = 3; // mat3
                if (type === 35676) numLoc = 4; // mat4

                const size = attr.size / numLoc;
                const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
                const offset = numLoc === 1 ? 0 : numLoc * numLoc;

                for (let i = 0; i < numLoc; i++) {
                    this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                    this.gl.enableVertexAttribArray(location + i);

                    // For instanced attributes, divisor needs to be set.
                    // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render
                    this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
                }
            });

            // Bind indices if geometry indexed
            if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
        }

        draw({ program, mode = this.gl.TRIANGLES }) {
            if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
                if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
                this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
                this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
            }

            // Check if any attributes need updating
            program.attributeLocations.forEach((location, { name }) => {
                const attr = this.attributes[name];
                if (attr.needsUpdate) this.updateAttribute(attr);
            });

            if (this.isInstanced) {
                if (this.attributes.index) {
                    this.gl.renderer.drawElementsInstanced(
                        mode,
                        this.drawRange.count,
                        this.attributes.index.type,
                        this.attributes.index.offset + this.drawRange.start * 2,
                        this.instancedCount
                    );
                } else {
                    this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
                }
            } else {
                if (this.attributes.index) {
                    this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
                } else {
                    this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
                }
            }
        }

        getPosition() {
            // Use position buffer, or min/max if available
            const attr = this.attributes.position;
            // if (attr.min) return [...attr.min, ...attr.max];
            if (attr.data) return attr;
            if (isBoundsWarned) return;
            console.warn('No position buffer data found to compute bounds');
            return (isBoundsWarned = true);
        }

        computeBoundingBox(attr) {
            if (!attr) attr = this.getPosition();
            const array = attr.data;
            const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;

            if (!this.bounds) {
                this.bounds = {
                    min: new Vec3(),
                    max: new Vec3(),
                    center: new Vec3(),
                    scale: new Vec3(),
                    radius: Infinity,
                };
            }

            const min = this.bounds.min;
            const max = this.bounds.max;
            const center = this.bounds.center;
            const scale = this.bounds.scale;

            min.set(+Infinity);
            max.set(-Infinity);

            // TODO: check size of position (eg triangle with Vec2)
            for (let i = 0, l = array.length; i < l; i += stride) {
                const x = array[i];
                const y = array[i + 1];
                const z = array[i + 2];

                min.x = Math.min(x, min.x);
                min.y = Math.min(y, min.y);
                min.z = Math.min(z, min.z);

                max.x = Math.max(x, max.x);
                max.y = Math.max(y, max.y);
                max.z = Math.max(z, max.z);
            }

            scale.sub(max, min);
            center.add(min, max).divide(2);
        }

        computeBoundingSphere(attr) {
            if (!attr) attr = this.getPosition();
            const array = attr.data;
            const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;

            if (!this.bounds) this.computeBoundingBox(attr);

            let maxRadiusSq = 0;
            for (let i = 0, l = array.length; i < l; i += stride) {
                tempVec3$1.fromArray(array, i);
                maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3$1));
            }

            this.bounds.radius = Math.sqrt(maxRadiusSq);
        }

        remove() {
            for (let key in this.VAOs) {
                this.gl.renderer.deleteVertexArray(this.VAOs[key]);
                delete this.VAOs[key];
            }
            for (let key in this.attributes) {
                this.gl.deleteBuffer(this.attributes[key].buffer);
                delete this.attributes[key];
            }
        }
    }

    // TODO: upload empty texture if null ? maybe not
    // TODO: upload identity matrix if null ?
    // TODO: sampler Cube

    let ID$3 = 1;

    // cache of typed arrays used to flatten uniform arrays
    const arrayCacheF32 = {};

    class Program {
        constructor(
            gl,
            {
                vertex,
                fragment,
                uniforms = {},

                transparent = false,
                cullFace = gl.BACK,
                frontFace = gl.CCW,
                depthTest = true,
                depthWrite = true,
                depthFunc = gl.LESS,
            } = {}
        ) {
            if (!gl.canvas) console.error('gl not passed as fist argument to Program');
            this.gl = gl;
            this.uniforms = uniforms;
            this.id = ID$3++;

            if (!vertex) console.warn('vertex shader not supplied');
            if (!fragment) console.warn('fragment shader not supplied');

            // Store program state
            this.transparent = transparent;
            this.cullFace = cullFace;
            this.frontFace = frontFace;
            this.depthTest = depthTest;
            this.depthWrite = depthWrite;
            this.depthFunc = depthFunc;
            this.blendFunc = {};
            this.blendEquation = {};

            // set default blendFunc if transparent flagged
            if (this.transparent && !this.blendFunc.src) {
                if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
                else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            }

            // compile vertex shader and log errors
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, vertex);
            gl.compileShader(vertexShader);
            if (gl.getShaderInfoLog(vertexShader) !== '') {
                console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
            }

            // compile fragment shader and log errors
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, fragment);
            gl.compileShader(fragmentShader);
            if (gl.getShaderInfoLog(fragmentShader) !== '') {
                console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
            }

            // compile program and log errors
            this.program = gl.createProgram();
            gl.attachShader(this.program, vertexShader);
            gl.attachShader(this.program, fragmentShader);
            gl.linkProgram(this.program);
            if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
                return console.warn(gl.getProgramInfoLog(this.program));
            }

            // Remove shader once linked
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);

            // Get active uniform locations
            this.uniformLocations = new Map();
            let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
            for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
                let uniform = gl.getActiveUniform(this.program, uIndex);
                this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));

                // split uniforms' names to separate array and struct declarations
                const split = uniform.name.match(/(\w+)/g);

                uniform.uniformName = split[0];

                if (split.length === 3) {
                    uniform.isStructArray = true;
                    uniform.structIndex = Number(split[1]);
                    uniform.structProperty = split[2];
                } else if (split.length === 2 && isNaN(Number(split[1]))) {
                    uniform.isStruct = true;
                    uniform.structProperty = split[1];
                }
            }

            // Get active attribute locations
            this.attributeLocations = new Map();
            const locations = [];
            const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
            for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
                const attribute = gl.getActiveAttrib(this.program, aIndex);
                const location = gl.getAttribLocation(this.program, attribute.name);
                // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
                if (location === -1) continue;
                locations[location] = attribute.name;
                this.attributeLocations.set(attribute, location);
            }
            this.attributeOrder = locations.join('');
        }

        setBlendFunc(src, dst, srcAlpha, dstAlpha) {
            this.blendFunc.src = src;
            this.blendFunc.dst = dst;
            this.blendFunc.srcAlpha = srcAlpha;
            this.blendFunc.dstAlpha = dstAlpha;
            if (src) this.transparent = true;
        }

        setBlendEquation(modeRGB, modeAlpha) {
            this.blendEquation.modeRGB = modeRGB;
            this.blendEquation.modeAlpha = modeAlpha;
        }

        applyState() {
            if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);
            else this.gl.renderer.disable(this.gl.DEPTH_TEST);

            if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);
            else this.gl.renderer.disable(this.gl.CULL_FACE);

            if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);
            else this.gl.renderer.disable(this.gl.BLEND);

            if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
            this.gl.renderer.setFrontFace(this.frontFace);
            this.gl.renderer.setDepthMask(this.depthWrite);
            this.gl.renderer.setDepthFunc(this.depthFunc);
            if (this.blendFunc.src)
                this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
            this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
        }

        use({ flipFaces = false } = {}) {
            let textureUnit = -1;
            const programActive = this.gl.renderer.state.currentProgram === this.id;

            // Avoid gl call if program already in use
            if (!programActive) {
                this.gl.useProgram(this.program);
                this.gl.renderer.state.currentProgram = this.id;
            }

            // Set only the active uniforms found in the shader
            this.uniformLocations.forEach((location, activeUniform) => {
                let name = activeUniform.uniformName;

                // get supplied uniform
                let uniform = this.uniforms[name];

                // For structs, get the specific property instead of the entire object
                if (activeUniform.isStruct) {
                    uniform = uniform[activeUniform.structProperty];
                    name += `.${activeUniform.structProperty}`;
                }
                if (activeUniform.isStructArray) {
                    uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                    name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
                }

                if (!uniform) {
                    return warn(`Active uniform ${name} has not been supplied`);
                }

                if (uniform && uniform.value === undefined) {
                    return warn(`${name} uniform is missing a value parameter`);
                }

                if (uniform.value.texture) {
                    textureUnit = textureUnit + 1;

                    // Check if texture needs to be updated
                    uniform.value.update(textureUnit);
                    return setUniform(this.gl, activeUniform.type, location, textureUnit);
                }

                // For texture arrays, set uniform as an array of texture units instead of just one
                if (uniform.value.length && uniform.value[0].texture) {
                    const textureUnits = [];
                    uniform.value.forEach((value) => {
                        textureUnit = textureUnit + 1;
                        value.update(textureUnit);
                        textureUnits.push(textureUnit);
                    });

                    return setUniform(this.gl, activeUniform.type, location, textureUnits);
                }

                setUniform(this.gl, activeUniform.type, location, uniform.value);
            });

            this.applyState();
            if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
        }

        remove() {
            this.gl.deleteProgram(this.program);
        }
    }

    function setUniform(gl, type, location, value) {
        value = value.length ? flatten(value) : value;
        const setValue = gl.renderer.state.uniformLocations.get(location);

        // Avoid redundant uniform commands
        if (value.length) {
            if (setValue === undefined || setValue.length !== value.length) {
                // clone array to store as cache
                gl.renderer.state.uniformLocations.set(location, value.slice(0));
            } else {
                if (arraysEqual(setValue, value)) return;

                // Update cached array values
                setValue.set ? setValue.set(value) : setArray(setValue, value);
                gl.renderer.state.uniformLocations.set(location, setValue);
            }
        } else {
            if (setValue === value) return;
            gl.renderer.state.uniformLocations.set(location, value);
        }

        switch (type) {
            case 5126:
                return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
            case 35664:
                return gl.uniform2fv(location, value); // FLOAT_VEC2
            case 35665:
                return gl.uniform3fv(location, value); // FLOAT_VEC3
            case 35666:
                return gl.uniform4fv(location, value); // FLOAT_VEC4
            case 35670: // BOOL
            case 5124: // INT
            case 35678: // SAMPLER_2D
            case 35680:
                return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
            case 35671: // BOOL_VEC2
            case 35667:
                return gl.uniform2iv(location, value); // INT_VEC2
            case 35672: // BOOL_VEC3
            case 35668:
                return gl.uniform3iv(location, value); // INT_VEC3
            case 35673: // BOOL_VEC4
            case 35669:
                return gl.uniform4iv(location, value); // INT_VEC4
            case 35674:
                return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
            case 35675:
                return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
            case 35676:
                return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
        }
    }

    function addLineNumbers(string) {
        let lines = string.split('\n');
        for (let i = 0; i < lines.length; i++) {
            lines[i] = i + 1 + ': ' + lines[i];
        }
        return lines.join('\n');
    }

    function flatten(a) {
        const arrayLen = a.length;
        const valueLen = a[0].length;
        if (valueLen === undefined) return a;
        const length = arrayLen * valueLen;
        let value = arrayCacheF32[length];
        if (!value) arrayCacheF32[length] = value = new Float32Array(length);
        for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
        return value;
    }

    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0, l = a.length; i < l; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    function setArray(a, b) {
        for (let i = 0, l = a.length; i < l; i++) {
            a[i] = b[i];
        }
    }

    let warnCount = 0;
    function warn(message) {
        if (warnCount > 100) return;
        console.warn(message);
        warnCount++;
        if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
    }

    // TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

    // Not automatic - devs to use these methods manually
    // gl.colorMask( colorMask, colorMask, colorMask, colorMask );
    // gl.clearColor( r, g, b, a );
    // gl.stencilMask( stencilMask );
    // gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
    // gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
    // gl.clearStencil( stencil );

    const tempVec3 = new Vec3();
    let ID$2 = 1;

    class Renderer {
        constructor({
            canvas = document.createElement('canvas'),
            width = 300,
            height = 150,
            dpr = 1,
            alpha = false,
            depth = true,
            stencil = false,
            antialias = false,
            premultipliedAlpha = false,
            preserveDrawingBuffer = false,
            powerPreference = 'default',
            autoClear = true,
            webgl = 2,
        } = {}) {
            const attributes = { alpha, depth, stencil, antialias, premultipliedAlpha, preserveDrawingBuffer, powerPreference };
            this.dpr = dpr;
            this.alpha = alpha;
            this.color = true;
            this.depth = depth;
            this.stencil = stencil;
            this.premultipliedAlpha = premultipliedAlpha;
            this.autoClear = autoClear;
            this.id = ID$2++;

            // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
            if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
            this.isWebgl2 = !!this.gl;
            if (!this.gl) this.gl = canvas.getContext('webgl', attributes);
            if (!this.gl) console.error('unable to create webgl context');

            // Attach renderer to gl so that all classes have access to internal state functions
            this.gl.renderer = this;

            // initialise size values
            this.setSize(width, height);

            // gl state stores to avoid redundant calls on methods used internally
            this.state = {};
            this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
            this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
            this.state.cullFace = null;
            this.state.frontFace = this.gl.CCW;
            this.state.depthMask = true;
            this.state.depthFunc = this.gl.LESS;
            this.state.premultiplyAlpha = false;
            this.state.flipY = false;
            this.state.unpackAlignment = 4;
            this.state.framebuffer = null;
            this.state.viewport = { x: 0, y: 0, width: null, height: null };
            this.state.textureUnits = [];
            this.state.activeTextureUnit = 0;
            this.state.boundBuffer = null;
            this.state.uniformLocations = new Map();
            this.state.currentProgram = null;

            // store requested extensions
            this.extensions = {};

            // Initialise extra format types
            if (this.isWebgl2) {
                this.getExtension('EXT_color_buffer_float');
                this.getExtension('OES_texture_float_linear');
            } else {
                this.getExtension('OES_texture_float');
                this.getExtension('OES_texture_float_linear');
                this.getExtension('OES_texture_half_float');
                this.getExtension('OES_texture_half_float_linear');
                this.getExtension('OES_element_index_uint');
                this.getExtension('OES_standard_derivatives');
                this.getExtension('EXT_sRGB');
                this.getExtension('WEBGL_depth_texture');
                this.getExtension('WEBGL_draw_buffers');
            }
            this.getExtension('WEBGL_compressed_texture_astc');
            this.getExtension('EXT_texture_compression_bptc');
            this.getExtension('WEBGL_compressed_texture_s3tc');
            this.getExtension('WEBGL_compressed_texture_etc1');
            this.getExtension('WEBGL_compressed_texture_pvrtc');
            this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

            // Create method aliases using extension (WebGL1) or native if available (WebGL2)
            this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
            this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
            this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
            this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
            this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
            this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
            this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

            // Store device parameters
            this.parameters = {};
            this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
                ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                : 0;
        }

        setSize(width, height) {
            this.width = width;
            this.height = height;

            this.gl.canvas.width = width * this.dpr;
            this.gl.canvas.height = height * this.dpr;

            Object.assign(this.gl.canvas.style, {
                width: width + 'px',
                height: height + 'px',
            });
        }

        setViewport(width, height, x = 0, y = 0) {
            if (this.state.viewport.width === width && this.state.viewport.height === height) return;
            this.state.viewport.width = width;
            this.state.viewport.height = height;
            this.state.viewport.x = x;
            this.state.viewport.y = y;
            this.gl.viewport(x, y, width, height);
        }

        setScissor(width, height, x = 0, y = 0) {
            this.gl.scissor(x, y, width, height);
        }

        enable(id) {
            if (this.state[id] === true) return;
            this.gl.enable(id);
            this.state[id] = true;
        }

        disable(id) {
            if (this.state[id] === false) return;
            this.gl.disable(id);
            this.state[id] = false;
        }

        setBlendFunc(src, dst, srcAlpha, dstAlpha) {
            if (
                this.state.blendFunc.src === src &&
                this.state.blendFunc.dst === dst &&
                this.state.blendFunc.srcAlpha === srcAlpha &&
                this.state.blendFunc.dstAlpha === dstAlpha
            )
                return;
            this.state.blendFunc.src = src;
            this.state.blendFunc.dst = dst;
            this.state.blendFunc.srcAlpha = srcAlpha;
            this.state.blendFunc.dstAlpha = dstAlpha;
            if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
            else this.gl.blendFunc(src, dst);
        }

        setBlendEquation(modeRGB, modeAlpha) {
            modeRGB = modeRGB || this.gl.FUNC_ADD;
            if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
            this.state.blendEquation.modeRGB = modeRGB;
            this.state.blendEquation.modeAlpha = modeAlpha;
            if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
            else this.gl.blendEquation(modeRGB);
        }

        setCullFace(value) {
            if (this.state.cullFace === value) return;
            this.state.cullFace = value;
            this.gl.cullFace(value);
        }

        setFrontFace(value) {
            if (this.state.frontFace === value) return;
            this.state.frontFace = value;
            this.gl.frontFace(value);
        }

        setDepthMask(value) {
            if (this.state.depthMask === value) return;
            this.state.depthMask = value;
            this.gl.depthMask(value);
        }

        setDepthFunc(value) {
            if (this.state.depthFunc === value) return;
            this.state.depthFunc = value;
            this.gl.depthFunc(value);
        }

        activeTexture(value) {
            if (this.state.activeTextureUnit === value) return;
            this.state.activeTextureUnit = value;
            this.gl.activeTexture(this.gl.TEXTURE0 + value);
        }

        bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
            if (this.state.framebuffer === buffer) return;
            this.state.framebuffer = buffer;
            this.gl.bindFramebuffer(target, buffer);
        }

        getExtension(extension, webgl2Func, extFunc) {
            // if webgl2 function supported, return func bound to gl context
            if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

            // fetch extension once only
            if (!this.extensions[extension]) {
                this.extensions[extension] = this.gl.getExtension(extension);
            }

            // return extension if no function requested
            if (!webgl2Func) return this.extensions[extension];

            // Return null if extension not supported
            if (!this.extensions[extension]) return null;

            // return extension function, bound to extension
            return this.extensions[extension][extFunc].bind(this.extensions[extension]);
        }

        sortOpaque(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            } else if (a.program.id !== b.program.id) {
                return a.program.id - b.program.id;
            } else if (a.zDepth !== b.zDepth) {
                return a.zDepth - b.zDepth;
            } else {
                return b.id - a.id;
            }
        }

        sortTransparent(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            }
            if (a.zDepth !== b.zDepth) {
                return b.zDepth - a.zDepth;
            } else {
                return b.id - a.id;
            }
        }

        sortUI(a, b) {
            if (a.renderOrder !== b.renderOrder) {
                return a.renderOrder - b.renderOrder;
            } else if (a.program.id !== b.program.id) {
                return a.program.id - b.program.id;
            } else {
                return b.id - a.id;
            }
        }

        getRenderList({ scene, camera, frustumCull, sort }) {
            let renderList = [];

            if (camera && frustumCull) camera.updateFrustum();

            // Get visible
            scene.traverse((node) => {
                if (!node.visible) return true;
                if (!node.draw) return;

                if (frustumCull && node.frustumCulled && camera) {
                    if (!camera.frustumIntersectsMesh(node)) return;
                }

                renderList.push(node);
            });

            if (sort) {
                const opaque = [];
                const transparent = []; // depthTest true
                const ui = []; // depthTest false

                renderList.forEach((node) => {
                    // Split into the 3 render groups
                    if (!node.program.transparent) {
                        opaque.push(node);
                    } else if (node.program.depthTest) {
                        transparent.push(node);
                    } else {
                        ui.push(node);
                    }

                    node.zDepth = 0;

                    // Only calculate z-depth if renderOrder unset and depthTest is true
                    if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

                    // update z-depth
                    node.worldMatrix.getTranslation(tempVec3);
                    tempVec3.applyMatrix4(camera.projectionViewMatrix);
                    node.zDepth = tempVec3.z;
                });

                opaque.sort(this.sortOpaque);
                transparent.sort(this.sortTransparent);
                ui.sort(this.sortUI);

                renderList = opaque.concat(transparent, ui);
            }

            return renderList;
        }

        render({ scene, camera, target = null, update = true, sort = true, frustumCull = true, clear }) {
            if (target === null) {
                // make sure no render target bound so draws to canvas
                this.bindFramebuffer();
                this.setViewport(this.width * this.dpr, this.height * this.dpr);
            } else {
                // bind supplied render target and update viewport
                this.bindFramebuffer(target);
                this.setViewport(target.width, target.height);
            }

            if (clear || (this.autoClear && clear !== false)) {
                // Ensure depth buffer writing is enabled so it can be cleared
                if (this.depth && (!target || target.depth)) {
                    this.enable(this.gl.DEPTH_TEST);
                    this.setDepthMask(true);
                }
                this.gl.clear(
                    (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
                        (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
                        (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
                );
            }

            // updates all scene graph matrices
            if (update) scene.updateMatrixWorld();

            // Update camera separately, in case not in scene graph
            if (camera) camera.updateMatrixWorld();

            // Get render list - entails culling and sorting
            const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

            renderList.forEach((node) => {
                node.draw({ camera });
            });
        }
    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    function copy$3(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    function set$3(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }

    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */
    function scale$2(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
    }

    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    function normalize$1(out, a) {
        let x = a[0];
        let y = a[1];
        let z = a[2];
        let w = a[3];
        let len = x * x + y * y + z * z + w * w;
        if (len > 0) {
            len = 1 / Math.sqrt(len);
        }
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
    }

    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$1(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function identity$2(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    }

    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/
    function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        let s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
    }

    /**
     * Multiplies two quats
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */
    function multiply$2(out, a, b) {
        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = b[0],
            by = b[1],
            bz = b[2],
            bw = b[3];

        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateX(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateY(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let by = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateZ(out, a, rad) {
        rad *= 0.5;

        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bz = Math.sin(rad),
            bw = Math.cos(rad);

        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
    }

    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {quat} out
     */
    function slerp(out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        let ax = a[0],
            ay = a[1],
            az = a[2],
            aw = a[3];
        let bx = b[0],
            by = b[1],
            bz = b[2],
            bw = b[3];

        let omega, cosom, sinom, scale0, scale1;

        // calc cosine
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        // adjust signs (if necessary)
        if (cosom < 0.0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        // calculate coefficients
        if (1.0 - cosom > 0.000001) {
            // standard case (slerp)
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1.0 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        } else {
            // "from" and "to" quaternions are very close
            //  ... so we can do a linear interpolation
            scale0 = 1.0 - t;
            scale1 = t;
        }
        // calculate final values
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;

        return out;
    }

    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */
    function invert$2(out, a) {
        let a0 = a[0],
            a1 = a[1],
            a2 = a[2],
            a3 = a[3];
        let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        let invDot = dot ? 1.0 / dot : 0;

        // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
    }

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */
    function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
    }

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */
    function fromMat3(out, m) {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        let fTrace = m[0] + m[4] + m[8];
        let fRoot;

        if (fTrace > 0.0) {
            // |w| > 1/2, may as well choose w > 1/2
            fRoot = Math.sqrt(fTrace + 1.0); // 2w
            out[3] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot; // 1/(4w)
            out[0] = (m[5] - m[7]) * fRoot;
            out[1] = (m[6] - m[2]) * fRoot;
            out[2] = (m[1] - m[3]) * fRoot;
        } else {
            // |w| <= 1/2
            let i = 0;
            if (m[4] > m[0]) i = 1;
            if (m[8] > m[i * 3 + i]) i = 2;
            let j = (i + 1) % 3;
            let k = (i + 2) % 3;

            fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
            out[i] = 0.5 * fRoot;
            fRoot = 0.5 / fRoot;
            out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
            out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
            out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }

        return out;
    }

    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} euler Angles to rotate around each axis in degrees.
     * @param {String} order detailing order of operations. Default 'XYZ'.
     * @returns {quat} out
     * @function
     */
    function fromEuler(out, euler, order = 'YXZ') {
        let sx = Math.sin(euler[0] * 0.5);
        let cx = Math.cos(euler[0] * 0.5);
        let sy = Math.sin(euler[1] * 0.5);
        let cy = Math.cos(euler[1] * 0.5);
        let sz = Math.sin(euler[2] * 0.5);
        let cz = Math.cos(euler[2] * 0.5);

        if (order === 'XYZ') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'YXZ') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        } else if (order === 'ZXY') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'ZYX') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        } else if (order === 'YZX') {
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
        } else if (order === 'XZY') {
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
        }

        return out;
    }

    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */
    const copy$2 = copy$3;

    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */
    const set$2 = set$3;

    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    const dot = dot$1;

    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */
    const normalize = normalize$1;

    class Quat extends Array {
        constructor(x = 0, y = 0, z = 0, w = 1) {
            super(x, y, z, w);
            this.onChange = () => {};
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        get w() {
            return this[3];
        }

        set x(v) {
            this[0] = v;
            this.onChange();
        }

        set y(v) {
            this[1] = v;
            this.onChange();
        }

        set z(v) {
            this[2] = v;
            this.onChange();
        }

        set w(v) {
            this[3] = v;
            this.onChange();
        }

        identity() {
            identity$2(this);
            this.onChange();
            return this;
        }

        set(x, y, z, w) {
            if (x.length) return this.copy(x);
            set$2(this, x, y, z, w);
            this.onChange();
            return this;
        }

        rotateX(a) {
            rotateX(this, this, a);
            this.onChange();
            return this;
        }

        rotateY(a) {
            rotateY(this, this, a);
            this.onChange();
            return this;
        }

        rotateZ(a) {
            rotateZ(this, this, a);
            this.onChange();
            return this;
        }

        inverse(q = this) {
            invert$2(this, q);
            this.onChange();
            return this;
        }

        conjugate(q = this) {
            conjugate(this, q);
            this.onChange();
            return this;
        }

        copy(q) {
            copy$2(this, q);
            this.onChange();
            return this;
        }

        normalize(q = this) {
            normalize(this, q);
            this.onChange();
            return this;
        }

        multiply(qA, qB) {
            if (qB) {
                multiply$2(this, qA, qB);
            } else {
                multiply$2(this, this, qA);
            }
            this.onChange();
            return this;
        }

        dot(v) {
            return dot(this, v);
        }

        fromMatrix3(matrix3) {
            fromMat3(this, matrix3);
            this.onChange();
            return this;
        }

        fromEuler(euler) {
            fromEuler(this, euler, euler.order);
            return this;
        }

        fromAxisAngle(axis, a) {
            setAxisAngle(this, axis, a);
            return this;
        }

        slerp(q, t) {
            slerp(this, this, q, t);
            return this;
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            return a;
        }
    }

    const EPSILON = 0.000001;

    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy$1(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function set$1(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
    }

    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity$1(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    }

    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert$1(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

        return out;
    }

    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant(a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }

    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply$1(out, a, b) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        // Cache only the current line of the second matrix
        let b0 = b[0],
            b1 = b[1],
            b2 = b[2],
            b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    }

    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate$1(out, a, v) {
        let x = v[0],
            y = v[1],
            z = v[2];
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;

        if (a === out) {
            out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
            out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
            out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
            out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11];

            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a03;
            out[4] = a10;
            out[5] = a11;
            out[6] = a12;
            out[7] = a13;
            out[8] = a20;
            out[9] = a21;
            out[10] = a22;
            out[11] = a23;

            out[12] = a00 * x + a10 * y + a20 * z + a[12];
            out[13] = a01 * x + a11 * y + a21 * z + a[13];
            out[14] = a02 * x + a12 * y + a22 * z + a[14];
            out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }

        return out;
    }

    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale$1(out, a, v) {
        let x = v[0],
            y = v[1],
            z = v[2];

        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
    }

    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate$1(out, a, rad, axis) {
        let x = axis[0],
            y = axis[1],
            z = axis[2];
        let len = Math.hypot(x, y, z);
        let s, c, t;
        let a00, a01, a02, a03;
        let a10, a11, a12, a13;
        let a20, a21, a22, a23;
        let b00, b01, b02;
        let b10, b11, b12;
        let b20, b21, b22;

        if (Math.abs(len) < EPSILON) {
            return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;

        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;

        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        // Construct the elements of the rotation matrix
        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c;

        // Perform rotation-specific matrix multiplication
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        if (a !== out) {
            // If the source and destination differ, copy the unchanged last row
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    }

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];

        return out;
    }

    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getScaling(out, mat) {
        let m11 = mat[0];
        let m12 = mat[1];
        let m13 = mat[2];
        let m21 = mat[4];
        let m22 = mat[5];
        let m23 = mat[6];
        let m31 = mat[8];
        let m32 = mat[9];
        let m33 = mat[10];

        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);

        return out;
    }

    function getMaxScaleOnAxis(mat) {
        let m11 = mat[0];
        let m12 = mat[1];
        let m13 = mat[2];
        let m21 = mat[4];
        let m22 = mat[5];
        let m23 = mat[6];
        let m31 = mat[8];
        let m32 = mat[9];
        let m33 = mat[10];

        const x = m11 * m11 + m12 * m12 + m13 * m13;
        const y = m21 * m21 + m22 * m22 + m23 * m23;
        const z = m31 * m31 + m32 * m32 + m33 * m33;

        return Math.sqrt(Math.max(x, y, z));
    }

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    const getRotation = (function () {
        const temp = [0, 0, 0];

        return function (out, mat) {
            let scaling = temp;
            getScaling(scaling, mat);

            let is1 = 1 / scaling[0];
            let is2 = 1 / scaling[1];
            let is3 = 1 / scaling[2];

            let sm11 = mat[0] * is1;
            let sm12 = mat[1] * is2;
            let sm13 = mat[2] * is3;
            let sm21 = mat[4] * is1;
            let sm22 = mat[5] * is2;
            let sm23 = mat[6] * is3;
            let sm31 = mat[8] * is1;
            let sm32 = mat[9] * is2;
            let sm33 = mat[10] * is3;

            let trace = sm11 + sm22 + sm33;
            let S = 0;

            if (trace > 0) {
                S = Math.sqrt(trace + 1.0) * 2;
                out[3] = 0.25 * S;
                out[0] = (sm23 - sm32) / S;
                out[1] = (sm31 - sm13) / S;
                out[2] = (sm12 - sm21) / S;
            } else if (sm11 > sm22 && sm11 > sm33) {
                S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
                out[3] = (sm23 - sm32) / S;
                out[0] = 0.25 * S;
                out[1] = (sm12 + sm21) / S;
                out[2] = (sm31 + sm13) / S;
            } else if (sm22 > sm33) {
                S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
                out[3] = (sm31 - sm13) / S;
                out[0] = (sm12 + sm21) / S;
                out[1] = 0.25 * S;
                out[2] = (sm23 + sm32) / S;
            } else {
                S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
                out[3] = (sm12 - sm21) / S;
                out[0] = (sm31 + sm13) / S;
                out[1] = (sm23 + sm32) / S;
                out[2] = 0.25 * S;
            }

            return out;
        };
    })();

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */
    function fromRotationTranslationScale(out, q, v, s) {
        // Quaternion math
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let xy = x * y2;
        let xz = x * z2;
        let yy = y * y2;
        let yz = y * z2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;
        let sx = s[0];
        let sy = s[1];
        let sz = s[2];

        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;

        return out;
    }

    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    function fromQuat$1(out, q) {
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;

        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;

        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;

        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;

        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;

        return out;
    }

    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2);
        let nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = 2 * far * near * nf;
        out[15] = 0;
        return out;
    }

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
        let lr = 1 / (left - right);
        let bt = 1 / (bottom - top);
        let nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
    }

    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} target Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function targetTo(out, eye, target, up) {
        let eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2];

        let z0 = eyex - target[0],
            z1 = eyey - target[1],
            z2 = eyez - target[2];

        let len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len === 0) {
            // eye and target are in the same position
            z2 = 1;
        } else {
            len = 1 / Math.sqrt(len);
            z0 *= len;
            z1 *= len;
            z2 *= len;
        }

        let x0 = upy * z2 - upz * z1,
            x1 = upz * z0 - upx * z2,
            x2 = upx * z1 - upy * z0;

        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len === 0) {
            // up and z are parallel
            if (upz) {
                upx += 1e-6;
            } else if (upy) {
                upz += 1e-6;
            } else {
                upy += 1e-6;
            }
            (x0 = upy * z2 - upz * z1), (x1 = upz * z0 - upx * z2), (x2 = upx * z1 - upy * z0);

            len = x0 * x0 + x1 * x1 + x2 * x2;
        }

        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;

        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
    }

    class Mat4 extends Array {
        constructor(
            m00 = 1,
            m01 = 0,
            m02 = 0,
            m03 = 0,
            m10 = 0,
            m11 = 1,
            m12 = 0,
            m13 = 0,
            m20 = 0,
            m21 = 0,
            m22 = 1,
            m23 = 0,
            m30 = 0,
            m31 = 0,
            m32 = 0,
            m33 = 1
        ) {
            super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            return this;
        }

        get x() {
            return this[12];
        }

        get y() {
            return this[13];
        }

        get z() {
            return this[14];
        }

        get w() {
            return this[15];
        }

        set x(v) {
            this[12] = v;
        }

        set y(v) {
            this[13] = v;
        }

        set z(v) {
            this[14] = v;
        }

        set w(v) {
            this[15] = v;
        }

        set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            if (m00.length) return this.copy(m00);
            set$1(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            return this;
        }

        translate(v, m = this) {
            translate$1(this, m, v);
            return this;
        }

        rotate(v, axis, m = this) {
            rotate$1(this, m, v, axis);
            return this;
        }

        scale(v, m = this) {
            scale$1(this, m, typeof v === 'number' ? [v, v, v] : v);
            return this;
        }

        multiply(ma, mb) {
            if (mb) {
                multiply$1(this, ma, mb);
            } else {
                multiply$1(this, this, ma);
            }
            return this;
        }

        identity() {
            identity$1(this);
            return this;
        }

        copy(m) {
            copy$1(this, m);
            return this;
        }

        fromPerspective({ fov, aspect, near, far } = {}) {
            perspective(this, fov, aspect, near, far);
            return this;
        }

        fromOrthogonal({ left, right, bottom, top, near, far }) {
            ortho(this, left, right, bottom, top, near, far);
            return this;
        }

        fromQuaternion(q) {
            fromQuat$1(this, q);
            return this;
        }

        setPosition(v) {
            this.x = v[0];
            this.y = v[1];
            this.z = v[2];
            return this;
        }

        inverse(m = this) {
            invert$1(this, m);
            return this;
        }

        compose(q, pos, scale) {
            fromRotationTranslationScale(this, q, pos, scale);
            return this;
        }

        getRotation(q) {
            getRotation(q, this);
            return this;
        }

        getTranslation(pos) {
            getTranslation(pos, this);
            return this;
        }

        getScaling(scale) {
            getScaling(scale, this);
            return this;
        }

        getMaxScaleOnAxis() {
            return getMaxScaleOnAxis(this);
        }

        lookAt(eye, target, up) {
            targetTo(this, eye, target, up);
            return this;
        }

        determinant() {
            return determinant(this);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            this[4] = a[o + 4];
            this[5] = a[o + 5];
            this[6] = a[o + 6];
            this[7] = a[o + 7];
            this[8] = a[o + 8];
            this[9] = a[o + 9];
            this[10] = a[o + 10];
            this[11] = a[o + 11];
            this[12] = a[o + 12];
            this[13] = a[o + 13];
            this[14] = a[o + 14];
            this[15] = a[o + 15];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            a[o + 4] = this[4];
            a[o + 5] = this[5];
            a[o + 6] = this[6];
            a[o + 7] = this[7];
            a[o + 8] = this[8];
            a[o + 9] = this[9];
            a[o + 10] = this[10];
            a[o + 11] = this[11];
            a[o + 12] = this[12];
            a[o + 13] = this[13];
            a[o + 14] = this[14];
            a[o + 15] = this[15];
            return a;
        }
    }

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    function fromRotationMatrix(out, m, order = 'YXZ') {
        if (order === 'XYZ') {
            out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
            if (Math.abs(m[8]) < 0.99999) {
                out[0] = Math.atan2(-m[9], m[10]);
                out[2] = Math.atan2(-m[4], m[0]);
            } else {
                out[0] = Math.atan2(m[6], m[5]);
                out[2] = 0;
            }
        } else if (order === 'YXZ') {
            out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
            if (Math.abs(m[9]) < 0.99999) {
                out[1] = Math.atan2(m[8], m[10]);
                out[2] = Math.atan2(m[1], m[5]);
            } else {
                out[1] = Math.atan2(-m[2], m[0]);
                out[2] = 0;
            }
        } else if (order === 'ZXY') {
            out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
            if (Math.abs(m[6]) < 0.99999) {
                out[1] = Math.atan2(-m[2], m[10]);
                out[2] = Math.atan2(-m[4], m[5]);
            } else {
                out[1] = 0;
                out[2] = Math.atan2(m[1], m[0]);
            }
        } else if (order === 'ZYX') {
            out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
            if (Math.abs(m[2]) < 0.99999) {
                out[0] = Math.atan2(m[6], m[10]);
                out[2] = Math.atan2(m[1], m[0]);
            } else {
                out[0] = 0;
                out[2] = Math.atan2(-m[4], m[5]);
            }
        } else if (order === 'YZX') {
            out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
            if (Math.abs(m[1]) < 0.99999) {
                out[0] = Math.atan2(-m[9], m[5]);
                out[1] = Math.atan2(-m[2], m[0]);
            } else {
                out[0] = 0;
                out[1] = Math.atan2(m[8], m[10]);
            }
        } else if (order === 'XZY') {
            out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
            if (Math.abs(m[4]) < 0.99999) {
                out[0] = Math.atan2(m[6], m[5]);
                out[1] = Math.atan2(m[8], m[0]);
            } else {
                out[0] = Math.atan2(-m[9], m[10]);
                out[1] = 0;
            }
        }

        return out;
    }

    const tmpMat4 = new Mat4();

    class Euler extends Array {
        constructor(x = 0, y = x, z = x, order = 'YXZ') {
            super(x, y, z);
            this.order = order;
            this.onChange = () => {};
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        set x(v) {
            this[0] = v;
            this.onChange();
        }

        set y(v) {
            this[1] = v;
            this.onChange();
        }

        set z(v) {
            this[2] = v;
            this.onChange();
        }

        set(x, y = x, z = x) {
            if (x.length) return this.copy(x);
            this[0] = x;
            this[1] = y;
            this[2] = z;
            this.onChange();
            return this;
        }

        copy(v) {
            this[0] = v[0];
            this[1] = v[1];
            this[2] = v[2];
            this.onChange();
            return this;
        }

        reorder(order) {
            this.order = order;
            this.onChange();
            return this;
        }

        fromRotationMatrix(m, order = this.order) {
            fromRotationMatrix(this, m, order);
            return this;
        }

        fromQuaternion(q, order = this.order) {
            tmpMat4.fromQuaternion(q);
            return this.fromRotationMatrix(tmpMat4, order);
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            return a;
        }
    }

    class Transform {
        constructor() {
            this.parent = null;
            this.children = [];
            this.visible = true;

            this.matrix = new Mat4();
            this.worldMatrix = new Mat4();
            this.matrixAutoUpdate = true;

            this.position = new Vec3();
            this.quaternion = new Quat();
            this.scale = new Vec3(1);
            this.rotation = new Euler();
            this.up = new Vec3(0, 1, 0);

            this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
            this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
        }

        setParent(parent, notifyParent = true) {
            if (this.parent && parent !== this.parent) this.parent.removeChild(this, false);
            this.parent = parent;
            if (notifyParent && parent) parent.addChild(this, false);
        }

        addChild(child, notifyChild = true) {
            if (!~this.children.indexOf(child)) this.children.push(child);
            if (notifyChild) child.setParent(this, false);
        }

        removeChild(child, notifyChild = true) {
            if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
            if (notifyChild) child.setParent(null, false);
        }

        updateMatrixWorld(force) {
            if (this.matrixAutoUpdate) this.updateMatrix();
            if (this.worldMatrixNeedsUpdate || force) {
                if (this.parent === null) this.worldMatrix.copy(this.matrix);
                else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
                this.worldMatrixNeedsUpdate = false;
                force = true;
            }

            for (let i = 0, l = this.children.length; i < l; i++) {
                this.children[i].updateMatrixWorld(force);
            }
        }

        updateMatrix() {
            this.matrix.compose(this.quaternion, this.position, this.scale);
            this.worldMatrixNeedsUpdate = true;
        }

        traverse(callback) {
            // Return true in callback to stop traversing children
            if (callback(this)) return;
            for (let i = 0, l = this.children.length; i < l; i++) {
                this.children[i].traverse(callback);
            }
        }

        decompose() {
            this.matrix.getTranslation(this.position);
            this.matrix.getRotation(this.quaternion);
            this.matrix.getScaling(this.scale);
            this.rotation.fromQuaternion(this.quaternion);
        }

        lookAt(target, invert = false) {
            if (invert) this.matrix.lookAt(this.position, target, this.up);
            else this.matrix.lookAt(target, this.position, this.up);
            this.matrix.getRotation(this.quaternion);
            this.rotation.fromQuaternion(this.quaternion);
        }
    }

    const tempMat4 = new Mat4();
    const tempVec3a = new Vec3();
    const tempVec3b = new Vec3();

    class Camera extends Transform {
        constructor(gl, { near = 0.1, far = 100, fov = 45, aspect = 1, left, right, bottom, top, zoom = 1 } = {}) {
            super();

            Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });

            this.projectionMatrix = new Mat4();
            this.viewMatrix = new Mat4();
            this.projectionViewMatrix = new Mat4();
            this.worldPosition = new Vec3();

            // Use orthographic if left/right set, else default to perspective camera
            this.type = left || right ? 'orthographic' : 'perspective';

            if (this.type === 'orthographic') this.orthographic();
            else this.perspective();
        }

        perspective({ near = this.near, far = this.far, fov = this.fov, aspect = this.aspect } = {}) {
            Object.assign(this, { near, far, fov, aspect });
            this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
            this.type = 'perspective';
            return this;
        }

        orthographic({
            near = this.near,
            far = this.far,
            left = this.left,
            right = this.right,
            bottom = this.bottom,
            top = this.top,
            zoom = this.zoom,
        } = {}) {
            Object.assign(this, { near, far, left, right, bottom, top, zoom });
            left /= zoom;
            right /= zoom;
            bottom /= zoom;
            top /= zoom;
            this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
            this.type = 'orthographic';
            return this;
        }

        updateMatrixWorld() {
            super.updateMatrixWorld();
            this.viewMatrix.inverse(this.worldMatrix);
            this.worldMatrix.getTranslation(this.worldPosition);

            // used for sorting
            this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
            return this;
        }

        lookAt(target) {
            super.lookAt(target, true);
            return this;
        }

        // Project 3D coordinate to 2D point
        project(v) {
            v.applyMatrix4(this.viewMatrix);
            v.applyMatrix4(this.projectionMatrix);
            return this;
        }

        // Unproject 2D point to 3D coordinate
        unproject(v) {
            v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
            v.applyMatrix4(this.worldMatrix);
            return this;
        }

        updateFrustum() {
            if (!this.frustum) {
                this.frustum = [new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3()];
            }

            const m = this.projectionViewMatrix;
            this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
            this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
            this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
            this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
            this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
            this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

            for (let i = 0; i < 6; i++) {
                const invLen = 1.0 / this.frustum[i].distance();
                this.frustum[i].multiply(invLen);
                this.frustum[i].constant *= invLen;
            }
        }

        frustumIntersectsMesh(node) {
            // If no position attribute, treat as frustumCulled false
            if (!node.geometry.attributes.position) return true;

            if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();

            if (!node.geometry.bounds) return true;

            const center = tempVec3a;
            center.copy(node.geometry.bounds.center);
            center.applyMatrix4(node.worldMatrix);

            const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();

            return this.frustumIntersectsSphere(center, radius);
        }

        frustumIntersectsSphere(center, radius) {
            const normal = tempVec3b;

            for (let i = 0; i < 6; i++) {
                const plane = this.frustum[i];
                const distance = normal.copy(plane).dot(center) + plane.constant;
                if (distance < -radius) return false;
            }
            return true;
        }
    }

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */
    function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
    }

    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat3} out
     */
    function fromQuat(out, q) {
        let x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        let x2 = x + x;
        let y2 = y + y;
        let z2 = z + z;

        let xx = x * x2;
        let yx = y * x2;
        let yy = y * y2;
        let zx = z * x2;
        let zy = z * y2;
        let zz = z * z2;
        let wx = w * x2;
        let wy = w * y2;
        let wz = w * z2;

        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;

        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;

        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;

        return out;
    }

    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }

    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
    }

    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
    }

    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */
    function invert(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        let a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        let a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        let b01 = a22 * a11 - a12 * a21;
        let b11 = -a22 * a10 + a12 * a20;
        let b21 = a21 * a10 - a11 * a20;

        // Calculate the determinant
        let det = a00 * b01 + a01 * b11 + a02 * b21;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
    }

    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */
    function multiply(out, a, b) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        let a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        let a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        let b00 = b[0],
            b01 = b[1],
            b02 = b[2];
        let b10 = b[3],
            b11 = b[4],
            b12 = b[5];
        let b20 = b[6],
            b21 = b[7],
            b22 = b[8];

        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;

        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;

        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
    }

    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */
    function translate(out, a, v) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            x = v[0],
            y = v[1];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;

        out[3] = a10;
        out[4] = a11;
        out[5] = a12;

        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
    }

    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */
    function rotate(out, a, rad) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            s = Math.sin(rad),
            c = Math.cos(rad);

        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;

        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;

        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
    }

    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/
    function scale(out, a, v) {
        let x = v[0],
            y = v[1];

        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];

        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];

        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
    }

    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {mat4} a Mat4 to derive the normal matrix from
     *
     * @returns {mat3} out
     */
    function normalFromMat4(out, a) {
        let a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        let a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        let a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        let b00 = a00 * a11 - a01 * a10;
        let b01 = a00 * a12 - a02 * a10;
        let b02 = a00 * a13 - a03 * a10;
        let b03 = a01 * a12 - a02 * a11;
        let b04 = a01 * a13 - a03 * a11;
        let b05 = a02 * a13 - a03 * a12;
        let b06 = a20 * a31 - a21 * a30;
        let b07 = a20 * a32 - a22 * a30;
        let b08 = a20 * a33 - a23 * a30;
        let b09 = a21 * a32 - a22 * a31;
        let b10 = a21 * a33 - a23 * a31;
        let b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
            return null;
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

        return out;
    }

    class Mat3 extends Array {
        constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
            super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
            return this;
        }

        set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            if (m00.length) return this.copy(m00);
            set(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
            return this;
        }

        translate(v, m = this) {
            translate(this, m, v);
            return this;
        }

        rotate(v, m = this) {
            rotate(this, m, v);
            return this;
        }

        scale(v, m = this) {
            scale(this, m, v);
            return this;
        }

        multiply(ma, mb) {
            if (mb) {
                multiply(this, ma, mb);
            } else {
                multiply(this, this, ma);
            }
            return this;
        }

        identity() {
            identity(this);
            return this;
        }

        copy(m) {
            copy(this, m);
            return this;
        }

        fromMatrix4(m) {
            fromMat4(this, m);
            return this;
        }

        fromQuaternion(q) {
            fromQuat(this, q);
            return this;
        }

        fromBasis(vec3a, vec3b, vec3c) {
            this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
            return this;
        }

        inverse(m = this) {
            invert(this, m);
            return this;
        }

        getNormalMatrix(m) {
            normalFromMat4(this, m);
            return this;
        }
    }

    let ID$1 = 0;

    class Mesh extends Transform {
        constructor(gl, { geometry, program, mode = gl.TRIANGLES, frustumCulled = true, renderOrder = 0 } = {}) {
            super();
            if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
            this.gl = gl;
            this.id = ID$1++;
            this.geometry = geometry;
            this.program = program;
            this.mode = mode;

            // Used to skip frustum culling
            this.frustumCulled = frustumCulled;

            // Override sorting to force an order
            this.renderOrder = renderOrder;
            this.modelViewMatrix = new Mat4();
            this.normalMatrix = new Mat3();
            this.beforeRenderCallbacks = [];
            this.afterRenderCallbacks = [];
        }

        onBeforeRender(f) {
            this.beforeRenderCallbacks.push(f);
            return this;
        }

        onAfterRender(f) {
            this.afterRenderCallbacks.push(f);
            return this;
        }

        draw({ camera } = {}) {
            this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
            if (camera) {
                // Add empty matrix uniforms to program if unset
                if (!this.program.uniforms.modelMatrix) {
                    Object.assign(this.program.uniforms, {
                        modelMatrix: { value: null },
                        viewMatrix: { value: null },
                        modelViewMatrix: { value: null },
                        normalMatrix: { value: null },
                        projectionMatrix: { value: null },
                        cameraPosition: { value: null },
                    });
                }

                // Set the matrix uniforms
                this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
                this.program.uniforms.cameraPosition.value = camera.worldPosition;
                this.program.uniforms.viewMatrix.value = camera.viewMatrix;
                this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
                this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
                this.program.uniforms.modelMatrix.value = this.worldMatrix;
                this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
                this.program.uniforms.normalMatrix.value = this.normalMatrix;
            }

            // determine if faces need to be flipped - when mesh scaled negatively
            let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
            this.program.use({ flipFaces });
            this.geometry.draw({ mode: this.mode, program: this.program });
            this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
        }
    }

    // TODO: delete texture
    // TODO: use texSubImage2D for updates (video or when loaded)
    // TODO: need? encoding = linearEncoding
    // TODO: support non-compressed mipmaps uploads

    const emptyPixel = new Uint8Array(4);

    function isPowerOf2(value) {
        return (value & (value - 1)) === 0;
    }

    let ID = 1;

    class Texture {
        constructor(
            gl,
            {
                image,
                target = gl.TEXTURE_2D,
                type = gl.UNSIGNED_BYTE,
                format = gl.RGBA,
                internalFormat = format,
                wrapS = gl.CLAMP_TO_EDGE,
                wrapT = gl.CLAMP_TO_EDGE,
                generateMipmaps = true,
                minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
                magFilter = gl.LINEAR,
                premultiplyAlpha = false,
                unpackAlignment = 4,
                flipY = target == gl.TEXTURE_2D ? true : false,
                anisotropy = 0,
                level = 0,
                width, // used for RenderTargets or Data Textures
                height = width,
            } = {}
        ) {
            this.gl = gl;
            this.id = ID++;

            this.image = image;
            this.target = target;
            this.type = type;
            this.format = format;
            this.internalFormat = internalFormat;
            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.generateMipmaps = generateMipmaps;
            this.premultiplyAlpha = premultiplyAlpha;
            this.unpackAlignment = unpackAlignment;
            this.flipY = flipY;
            this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
            this.level = level;
            this.width = width;
            this.height = height;
            this.texture = this.gl.createTexture();

            this.store = {
                image: null,
            };

            // Alias for state store to avoid redundant calls for global state
            this.glState = this.gl.renderer.state;

            // State store to avoid redundant calls for per-texture state
            this.state = {};
            this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
            this.state.magFilter = this.gl.LINEAR;
            this.state.wrapS = this.gl.REPEAT;
            this.state.wrapT = this.gl.REPEAT;
            this.state.anisotropy = 0;
        }

        bind() {
            // Already bound to active texture unit
            if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
            this.gl.bindTexture(this.target, this.texture);
            this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
        }

        update(textureUnit = 0) {
            const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);

            // Make sure that texture is bound to its texture unit
            if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
                // set active texture unit to perform texture functions
                this.gl.renderer.activeTexture(textureUnit);
                this.bind();
            }

            if (!needsUpdate) return;
            this.needsUpdate = false;

            if (this.flipY !== this.glState.flipY) {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
                this.glState.flipY = this.flipY;
            }

            if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
                this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                this.glState.premultiplyAlpha = this.premultiplyAlpha;
            }

            if (this.unpackAlignment !== this.glState.unpackAlignment) {
                this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
                this.glState.unpackAlignment = this.unpackAlignment;
            }

            if (this.minFilter !== this.state.minFilter) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
                this.state.minFilter = this.minFilter;
            }

            if (this.magFilter !== this.state.magFilter) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
                this.state.magFilter = this.magFilter;
            }

            if (this.wrapS !== this.state.wrapS) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
                this.state.wrapS = this.wrapS;
            }

            if (this.wrapT !== this.state.wrapT) {
                this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
                this.state.wrapT = this.wrapT;
            }

            if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
                this.gl.texParameterf(
                    this.target,
                    this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT,
                    this.anisotropy
                );
                this.state.anisotropy = this.anisotropy;
            }

            if (this.image) {
                if (this.image.width) {
                    this.width = this.image.width;
                    this.height = this.image.height;
                }

                if (this.target === this.gl.TEXTURE_CUBE_MAP) {
                    // For cube maps
                    for (let i = 0; i < 6; i++) {
                        this.gl.texImage2D(
                            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            this.level,
                            this.internalFormat,
                            this.format,
                            this.type,
                            this.image[i]
                        );
                    }
                } else if (ArrayBuffer.isView(this.image)) {
                    // Data texture
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                } else if (this.image.isCompressedTexture) {
                    // Compressed texture
                    for (let level = 0; level < this.image.length; level++) {
                        this.gl.compressedTexImage2D(
                            this.target,
                            level,
                            this.internalFormat,
                            this.image[level].width,
                            this.image[level].height,
                            0,
                            this.image[level].data
                        );
                    }
                } else {
                    // Regular texture
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                }

                if (this.generateMipmaps) {
                    // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
                    if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
                        this.generateMipmaps = false;
                        this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
                        this.minFilter = this.gl.LINEAR;
                    } else {
                        this.gl.generateMipmap(this.target);
                    }
                }

                // Callback for when data is pushed to GPU
                this.onUpdate && this.onUpdate();
            } else {
                if (this.target === this.gl.TEXTURE_CUBE_MAP) {
                    // Upload empty pixel for each side while no image to avoid errors while image or video loading
                    for (let i = 0; i < 6; i++) {
                        this.gl.texImage2D(
                            this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                            0,
                            this.gl.RGBA,
                            1,
                            1,
                            0,
                            this.gl.RGBA,
                            this.gl.UNSIGNED_BYTE,
                            emptyPixel
                        );
                    }
                } else if (this.width) {
                    // image intentionally left null for RenderTarget
                    this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
                } else {
                    // Upload empty pixel if no image to avoid errors while image or video loading
                    this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
                }
            }
            this.store.image = this.image;
        }
    }

    class Vec4 extends Array {
        constructor(x = 0, y = x, z = x, w = x) {
            super(x, y, z, w);
            return this;
        }

        get x() {
            return this[0];
        }

        get y() {
            return this[1];
        }

        get z() {
            return this[2];
        }

        get w() {
            return this[3];
        }

        set x(v) {
            this[0] = v;
        }

        set y(v) {
            this[1] = v;
        }

        set z(v) {
            this[2] = v;
        }

        set w(v) {
            this[3] = v;
        }

        set(x, y, z, w) {
            if (x.length) return this.copy(x);
            set$3(this, x, y, z, w);
            return this;
        }

        copy(v) {
            copy$3(this, v);
            return this;
        }

        normalize() {
            normalize$1(this, this);
            return this;
        }

        multiply(v) {
            scale$2(this, this, v);
            return this;
        }

        dot(v) {
            return dot$1(this, v);
        }

        fromArray(a, o = 0) {
            this[0] = a[o];
            this[1] = a[o + 1];
            this[2] = a[o + 2];
            this[3] = a[o + 3];
            return this;
        }

        toArray(a = [], o = 0) {
            a[o] = this[0];
            a[o + 1] = this[1];
            a[o + 2] = this[2];
            a[o + 3] = this[3];
            return a;
        }
    }

    class Plane extends Geometry {
        constructor(gl, { width = 1, height = 1, widthSegments = 1, heightSegments = 1, attributes = {} } = {}) {
            const wSegs = widthSegments;
            const hSegs = heightSegments;

            // Determine length of arrays
            const num = (wSegs + 1) * (hSegs + 1);
            const numIndices = wSegs * hSegs * 6;

            // Generate empty arrays once
            const position = new Float32Array(num * 3);
            const normal = new Float32Array(num * 3);
            const uv = new Float32Array(num * 2);
            const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

            Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);

            Object.assign(attributes, {
                position: { size: 3, data: position },
                normal: { size: 3, data: normal },
                uv: { size: 2, data: uv },
                index: { data: index },
            });

            super(gl, attributes);
        }

        static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
            const io = i;
            const segW = width / wSegs;
            const segH = height / hSegs;

            for (let iy = 0; iy <= hSegs; iy++) {
                let y = iy * segH - height / 2;
                for (let ix = 0; ix <= wSegs; ix++, i++) {
                    let x = ix * segW - width / 2;

                    position[i * 3 + u] = x * uDir;
                    position[i * 3 + v] = y * vDir;
                    position[i * 3 + w] = depth / 2;

                    normal[i * 3 + u] = 0;
                    normal[i * 3 + v] = 0;
                    normal[i * 3 + w] = depth >= 0 ? 1 : -1;

                    uv[i * 2] = ix / wSegs;
                    uv[i * 2 + 1] = 1 - iy / hSegs;

                    if (iy === hSegs || ix === wSegs) continue;
                    let a = io + ix + iy * (wSegs + 1);
                    let b = io + ix + (iy + 1) * (wSegs + 1);
                    let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
                    let d = io + ix + iy * (wSegs + 1) + 1;

                    index[ii * 6] = a;
                    index[ii * 6 + 1] = b;
                    index[ii * 6 + 2] = d;
                    index[ii * 6 + 3] = b;
                    index[ii * 6 + 4] = c;
                    index[ii * 6 + 5] = d;
                    ii++;
                }
            }
        }
    }

    // eslint-disable-next-line
    const displacement = `data:image/jpeg;base64,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`;

    /*
     * A fast javascript implementation of simplex noise by Jonas Wagner

    Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
    Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
    With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
    Better rank ordering method by Stefan Gustavson in 2012.

     Copyright (c) 2022 Jonas Wagner

     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:

     The above copyright notice and this permission notice shall be included in all
     copies or substantial portions of the Software.

     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     SOFTWARE.
     */

    // 
    const F2 =  0.5 * (Math.sqrt(3.0) - 1.0);
    const G2 =  (3.0 - Math.sqrt(3.0)) / 6.0;
    // I'm really not sure why this | 0 (basically a coercion to int)
    // is making this faster but I get ~5 million ops/sec more on the
    // benchmarks across the board or a ~10% speedup.
    const fastFloor = (x) => Math.floor(x) | 0;
    const grad2 = /*#__PURE__*/ new Float64Array([1, 1,
        -1, 1,
        1, -1,
        -1, -1,
        1, 0,
        -1, 0,
        1, 0,
        -1, 0,
        0, 1,
        0, -1,
        0, 1,
        0, -1]);
    /**
     * Creates a 2D noise function
     * @param random the random function that will be used to build the permutation table
     * @returns {NoiseFunction2D}
     */
    function createNoise2D(random = Math.random) {
        const perm = buildPermutationTable(random);
        // precalculating this yields a little ~3% performance improvement.
        const permGrad2x = new Float64Array(perm).map(v => grad2[(v % 12) * 2]);
        const permGrad2y = new Float64Array(perm).map(v => grad2[(v % 12) * 2 + 1]);
        return function noise2D(x, y) {
            // if(!isFinite(x) || !isFinite(y)) return 0;
            let n0 = 0; // Noise contributions from the three corners
            let n1 = 0;
            let n2 = 0;
            // Skew the input space to determine which simplex cell we're in
            const s = (x + y) * F2; // Hairy factor for 2D
            const i = fastFloor(x + s);
            const j = fastFloor(y + s);
            const t = (i + j) * G2;
            const X0 = i - t; // Unskew the cell origin back to (x,y) space
            const Y0 = j - t;
            const x0 = x - X0; // The x,y distances from the cell origin
            const y0 = y - Y0;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
            if (x0 > y0) {
                i1 = 1;
                j1 = 0;
            } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            else {
                i1 = 0;
                j1 = 1;
            } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            const x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
            const y1 = y0 - j1 + G2;
            const x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
            const y2 = y0 - 1.0 + 2.0 * G2;
            // Work out the hashed gradient indices of the three simplex corners
            const ii = i & 255;
            const jj = j & 255;
            // Calculate the contribution from the three corners
            let t0 = 0.5 - x0 * x0 - y0 * y0;
            if (t0 >= 0) {
                const gi0 = ii + perm[jj];
                const g0x = permGrad2x[gi0];
                const g0y = permGrad2y[gi0];
                t0 *= t0;
                // n0 = t0 * t0 * (grad2[gi0] * x0 + grad2[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
                n0 = t0 * t0 * (g0x * x0 + g0y * y0);
            }
            let t1 = 0.5 - x1 * x1 - y1 * y1;
            if (t1 >= 0) {
                const gi1 = ii + i1 + perm[jj + j1];
                const g1x = permGrad2x[gi1];
                const g1y = permGrad2y[gi1];
                t1 *= t1;
                // n1 = t1 * t1 * (grad2[gi1] * x1 + grad2[gi1 + 1] * y1);
                n1 = t1 * t1 * (g1x * x1 + g1y * y1);
            }
            let t2 = 0.5 - x2 * x2 - y2 * y2;
            if (t2 >= 0) {
                const gi2 = ii + 1 + perm[jj + 1];
                const g2x = permGrad2x[gi2];
                const g2y = permGrad2y[gi2];
                t2 *= t2;
                // n2 = t2 * t2 * (grad2[gi2] * x2 + grad2[gi2 + 1] * y2);
                n2 = t2 * t2 * (g2x * x2 + g2y * y2);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70.0 * (n0 + n1 + n2);
        };
    }
    /**
     * Builds a random permutation table.
     * This is exported only for (internal) testing purposes.
     * Do not rely on this export.
     * @private
     */
    function buildPermutationTable(random) {
        const tableSize = 512;
        const p = new Uint8Array(tableSize);
        for (let i = 0; i < tableSize / 2; i++) {
            p[i] = i;
        }
        for (let i = 0; i < tableSize / 2 - 1; i++) {
            const r = i + ~~(random() * (256 - i));
            const aux = p[i];
            p[i] = p[r];
            p[r] = aux;
        }
        for (let i = 256; i < tableSize; i++) {
            p[i] = p[i - 256];
        }
        return p;
    }

    function randFloatSpread(range) {
      return range * (0.5 - Math.random());
    }

    function randFloat(low, high) {
      return low + Math.random() * (high - low);
    }

    const noise2D = createNoise2D(Math.random);

    function clamp(a) {
      return Math.max(0, Math.min(1, a));
    }

    // eslint-disable-next-line
    function getGeometry(gl, detail, offsetTop) {
      offsetTop = offsetTop || 0;
      const number = detail;
      const width = 2;
      const height = 2;

      const gran = width / number;
      const granH = (gran * Math.sqrt(3)) / 2;
      const rows = height / granH;

      const offsets = [];
      const positions = [];
      const centroids = [];
      const control0 = [];
      const control1 = [];
      const randoms = [];
      const uvs = [];
      let currentShift = 0;
      const bary = [];
      let currentHeight = 0;
      const scale = 2;

      for (let j = 0; j < rows; j += 1) {
        currentHeight = j * granH;
        if (j % 2 === 1) {
          currentShift = -gran / 2;
        } else {
          currentShift = 0;
        }
        for (let i = 0; i <= number; i += 1) {
          const sign = Math.sign(i * gran + currentShift - width / 2);
          // sign =1
          // first triangle
          positions.push(
            i * gran + currentShift - width / 2,
            currentHeight - height / 2,
            0,
          );
          uvs.push((i * gran + currentShift) / width, currentHeight / height);
          positions.push(
            i * gran + gran / 2 + currentShift - width / 2,
            granH + currentHeight - height / 2,
            0,
          );
          uvs.push(
            (i * gran + gran / 2 + currentShift) / width,
            (granH + currentHeight) / height,
          );
          positions.push(
            i * gran - gran / 2 + currentShift - width / 2,
            granH + currentHeight - height / 2,
            0,
          );
          uvs.push(
            (i * gran - gran / 2 + currentShift) / width,
            (granH + currentHeight) / height,
          );

          let simp = noise2D(i / rows, j / rows) + Math.random();
          const o = clamp(currentHeight / height + (2 * simp) / detail);
          let r = Math.random();
          offsets.push(o, clamp(o + 0.1 * offsetTop), clamp(o + 0.1 * offsetTop));
          randoms.push(r, r, r);
          const c = [
            i * gran + currentShift - width / 2,
            currentHeight - height / 2,
            0,
          ];
          centroids.push(...c, ...c, ...c);

          const ctrl0 = [
            scale * sign * randFloat(-0.3, 0.3),
            -scale * randFloat(-0.3, 0.3) * 1.5,
            -randFloatSpread(0.5),
          ];
          const ctrl1 = [
            scale * sign * randFloat(0.3, 0.6),
            -scale * randFloat(0.3, 0.6) * 1.5,
            -randFloatSpread(0.5),
          ];
          control0.push(...ctrl0, ...ctrl0, ...ctrl0);
          control1.push(...ctrl1, ...ctrl1, ...ctrl1);

          bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
          // second triangle
          positions.push(
            i * gran + currentShift - width / 2,
            currentHeight - height / 2,
            0,
          );
          uvs.push((i * gran + currentShift) / width, currentHeight / height);
          positions.push(
            i * gran + gran + currentShift - width / 2,
            currentHeight - height / 2,
            0,
          );
          uvs.push(
            (i * gran + gran + currentShift) / width,
            currentHeight / height,
          );
          positions.push(
            i * gran + gran / 2 + currentShift - width / 2,
            granH + currentHeight - height / 2,
            0,
          );
          uvs.push(
            (i * gran + gran / 2 + currentShift) / width,
            (granH + currentHeight) / height,
          );

          simp = noise2D((i + 1) / rows, j / rows) + Math.random();
          const o1 = clamp(currentHeight / height + (2 * simp) / detail);
          r = Math.random();
          offsets.push(o1, o1, clamp(o1 + 0.1 * offsetTop));
          randoms.push(r, r, r);
          const c1 = [
            i * gran + currentShift - width / 2,
            currentHeight - height / 2,
            0,
          ];

          control0.push(...ctrl0, ...ctrl0, ...ctrl0);
          control1.push(...ctrl1, ...ctrl1, ...ctrl1);

          centroids.push(...c1, ...c1, ...c1);
          bary.push(0, 0, 1, 0, 1, 0, 1, 0, 0);
        }
      }
      const geometry = new Geometry(gl);

      geometry.addAttribute('position', {
        size: 3,
        data: new Float32Array(positions),
      });
      geometry.addAttribute('bary', {
        size: 3,
        data: new Float32Array(bary),
      });
      geometry.addAttribute('uv', {
        size: 2,
        data: new Float32Array(uvs),
      });
      geometry.addAttribute('offset', {
        size: 1,
        data: new Float32Array(offsets),
      });
      geometry.addAttribute('centroid1', {
        size: 3,
        data: new Float32Array(centroids),
      });
      geometry.addAttribute('control0', {
        size: 3,
        data: new Float32Array(control0),
      });
      geometry.addAttribute('control1', {
        size: 3,
        data: new Float32Array(control1),
      });
      geometry.addAttribute('random', {
        size: 1,
        data: new Float32Array(randoms),
      });
      return geometry;
    }

    const PI = `float PI = 3.141592653589793238;`;
    const fragmentCommon = /* glsl */ `
precision highp float;

uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform vec4 resolution;
varying vec2 vUv;
`;
    const vertexCommon = /* glsl */ `
attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute float offset;
attribute vec3 bary;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float progress;
uniform vec4 resolution;

varying vec2 vUv;
varying float vProgress;
varying float vProgress1;
varying vec3 vBary;
`;
    const vertexRotate = /* glsl */ `
mat4 rotationMatrix(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
              oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
              oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
              0.0,                                0.0,                                0.0,                                1.0);
}
vec3 rotate(vec3 v, vec3 axis, float angle) {
  mat4 m = rotationMatrix(axis, angle);
  return (m * vec4(v, 1.0)).xyz;
}
`;

    const morphX = {
      uniforms: {
        intensity: { value: 1, type: 'f', min: 0, max: 3 },
      },
      fragment: /* glsl */ `
  ${fragmentCommon}
  uniform float intensity;
  uniform sampler2D displacement;
  mat2 getRotM(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
  }
  const float PI = 3.1415;
  const float angle1 = PI *0.25;
  const float angle2 = -PI *0.75;
  void main()	{
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    vec4 disp = texture2D(displacement, newUV);
    vec2 dispVec = vec2(disp.r, disp.g);
    vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
    vec4 t1 = texture2D(texture1, distortedPosition1);
    vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
    vec4 t2 = texture2D(texture2, distortedPosition2);
    gl_FragColor = mix(t1, t2, progress);
  }
`,
    };

    const morphY = {
      uniforms: {
        intensity: { value: 0.3, type: 'f', min: 0, max: 2 },
      },
      fragment: /* glsl */ `
  ${fragmentCommon}
  uniform float intensity;
  uniform sampler2D displacement;
  void main()	{
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    vec4 d1 = texture2D(texture1, newUV);
    vec4 d2 = texture2D(texture2, newUV);
    float displace1 = (d1.r + d1.g + d1.b)*0.33;
    float displace2 = (d2.r + d2.g + d2.b)*0.33;

    vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
    vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));
    gl_FragColor = mix(t1, t2, progress);
  }
`,
    };

    const pageCurl = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    const float MIN_AMOUNT = -0.16;
    const float MAX_AMOUNT = 1.5;

    const float PI = 3.141592653589793;

    const float scale = 512.0;
    const float sharpness = 3.0;

    const float cylinderRadius = 1.0 / PI / 2.0;

    vec4 getFromColor(vec2 p) {
      return texture2D(texture1, p);
    }

    vec4 getToColor(vec2 p) {
      return texture2D(texture2, p);
    }

    vec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation) {
      float hitPoint = hitAngle / (2.0 * PI);
      point.y = hitPoint;
      return rrotation * point;
    }

    vec4 antiAlias(vec4 color1, vec4 color2, float distanc) {
      distanc *= scale;
      if(distanc < 0.0)
        return color2;
      if(distanc > 2.0)
        return color1;
      float dd = pow(1.0 - distanc / 2.0, sharpness);
      return ((color2 - color1) * dd) + color1;
    }

    float distanceToEdge(vec3 point) {
      float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);
      float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);
      if(point.x < 0.0)
        dx = -point.x;
      if(point.x > 1.0)
        dx = point.x - 1.0;
      if(point.y < 0.0)
        dy = -point.y;
      if(point.y > 1.0)
        dy = point.y - 1.0;
      if((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0))
        return sqrt(dx * dx + dy * dy);
      return min(dx, dy);
    }

    vec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation, float cylinderAngle) {
      float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);
      vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);
      if(yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)) {
        return getToColor(p);
      }

      if(yc > 0.0)
        return getFromColor(p);

      vec4 color = getFromColor(point.xy);
      vec4 tcolor = vec4(0.0);

      return antiAlias(color, tcolor, distanceToEdge(point));
    }

    vec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation, float cylinderAngle, float amount) {
      float shadow = distanceToEdge(point) * 30.0;
      shadow = (1.0 - shadow) / 3.0;

      if(shadow < 0.0)
        shadow = 0.0;
      else
        shadow *= amount;

      vec4 shadowColor = seeThrough(yc, p, rotation, rrotation, cylinderAngle);
      shadowColor.r -= shadow;
      shadowColor.g -= shadow;
      shadowColor.b -= shadow;

      return shadowColor;
    }

    vec4 backside(float yc, vec3 point) {
      vec4 color = getFromColor(point.xy);
      float gray = (color.r + color.b + color.g) / 15.0;
      gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));
      color.rgb = vec3(gray);
      return color;
    }

    vec4 behindSurface(vec2 p, float yc, vec3 point, mat3 rrotation, float cylinderAngle, float amount) {
      float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;
      shado *= 1.0 - abs(point.x - 0.5);

      yc = (-cylinderRadius - cylinderRadius - yc);

      float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;
      point = hitPoint(hitAngle, yc, point, rrotation);

      if(yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5)) {
        shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));
        shado *= pow(-yc / cylinderRadius, 3.0);
        shado *= 0.5;
      } else {
        shado = 0.0;
      }
      return vec4(getToColor(p).rgb - shado, 1.0);
    }

    void main() {
      vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);

      float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;
      float cylinderCenter = amount;
          // 360 degrees * amount
      float cylinderAngle = 2.0 * PI * amount;

      const float angle = 100.0 * PI / 180.0;
      float c = cos(-angle);
      float s = sin(-angle);

      mat3 rotation = mat3(c, s, 0, -s, c, 0, -0.801, 0.8900, 1);
      c = cos(angle);
      s = sin(angle);

      mat3 rrotation = mat3(c, s, 0, -s, c, 0, 0.98500, 0.985, 1);

      vec3 point = rotation * vec3(newUV, 1.0);

      float yc = point.y - cylinderCenter;

      if(yc < -cylinderRadius) {
                        // Behind surface
        gl_FragColor = behindSurface(newUV, yc, point, rrotation, cylinderAngle, amount);
        return;
      }

      if(yc > cylinderRadius) {
                        // Flat surface
        gl_FragColor = getFromColor(newUV);
        return;
      }

      float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;

      float hitAngleMod = mod(hitAngle, 2.0 * PI);
      if((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI / 2.0 && amount < 0.0)) {
        gl_FragColor = seeThrough(yc, newUV, rotation, rrotation, cylinderAngle);
        return;
      }

      point = hitPoint(hitAngle, yc, point, rrotation);

      if(point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0) {
        gl_FragColor = seeThroughWithShadow(yc, newUV, point, rotation, rrotation, cylinderAngle, amount);
        return;
      }

      vec4 color = backside(yc, point);

      vec4 otherColor;
      if(yc < 0.0) {
        float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);
        shado *= pow(-yc / cylinderRadius, 3.0);
        shado *= 0.5;
        otherColor = vec4(0.0, 0.0, 0.0, shado);
      } else {
        otherColor = getFromColor(newUV);
      }

      color = antiAlias(color, otherColor, cylinderRadius - abs(yc));

      vec4 cl = seeThroughWithShadow(yc, newUV, point, rotation, rrotation, cylinderAngle, amount);
      float dist = distanceToEdge(point);

      gl_FragColor = antiAlias(color, cl, dist);
    }
  `,
    };

    const peelX = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
      vec2 p = newUV;
      float x = progress;
      x = smoothstep(.0,1.0,(x*2.0+p.x-1.0));
      vec4 f = mix(
        texture2D(texture1, (p-.5)*(1.-x)+.5),
        texture2D(texture2, (p-.5)*x+.5),
        x);
      gl_FragColor = f;
    }
  `,
    };

    const peelY = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
      vec2 p = newUV;
      float x = progress;
      x = smoothstep(.0,1.0,(x*2.0+p.y-1.0));
      vec4 f = mix(
        texture2D(texture1, (p-.5)*(1.-x)+.5),
        texture2D(texture2, (p-.5)*x+.5),
        x);
      gl_FragColor = f;
    }
  `,
    };

    const pixelize = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    ivec2 squaresMin = ivec2(50);
    int steps = 20;

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      float d = min(progress, 1.0 - progress);
      float dist = steps>0 ? ceil(d * float(steps)) / float(steps) : d;
      vec2 squareSize = 2.0 * dist / vec2(squaresMin);

      vec2 p = dist>0.0 ? (floor(newUV / squareSize) + 0.5) * squareSize : newUV;

      vec2 uv1 = newUV;
      vec2 uv2 = newUV;

      vec4 t1 = texture2D(texture1,p);
      vec4 t2 = texture2D(texture2,p);

      gl_FragColor = mix(t1, t2, progress);
    }
  `,
    };

    const polygonsFall = {
      uniforms: {},
      detail: 12,
      offsetTop: 0,
      vertex: /* glsl */ `
    ${vertexCommon}
    attribute vec3 centroid1;

    ${vertexRotate}

    void main() {
      ${PI}
      vUv = uv;
      vBary = bary;

      vec3 newpos = position;

      float o = 1. - offset;
      float pr = (progress - 0.5) * (0. + resolution.y / resolution.x) + 0.5;
      pr = progress;
      float prog = clamp((pr - o * 0.9) / 0.1, 0., 1.);
      vProgress = prog;
      vProgress1 = clamp((pr - clamp(o - 0.1, 0., 1.) * 0.9) / 0.1, 0., 1.);
      newpos = rotate((newpos - centroid1), vec3(1., 0., 0.), -prog * PI) + centroid1 + vec3(0., -1., 0.) * prog * 0.;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
    }
  `,
      fragment: /* glsl */ `
    ${fragmentCommon}
    varying float vProgress;
    varying float vProgress1;
    ${PI}
    varying vec3 vBary;

    void main()	{
      float width = 2.5 * vProgress1;
      vec3 d;
      #ifdef GL_OES_standard_derivatives
        d = fwidth(vBary);
      #endif
      vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), vBary);
      float alpha = max(max(s.x, s.y), s.z);
      vec3 color = vec3(alpha);
      vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
      vec4 t = texture2D(texture1, newUV);
      float opa = smoothstep(1., 0.5, vProgress);
      opa = 1. - vProgress;
      gl_FragColor = vec4(vUv, 0.0, opa);
      gl_FragColor = vec4(t.rgb + .5 * color * vProgress1, opa);
    }
  `,
    };

    const polygonsMorph = {
      uniforms: {},
      detail: 20,
      offsetTop: 0.4,
      vertex: /* glsl */ `
    ${vertexCommon}
    ${vertexRotate}

    void main() {
      ${PI}
      vUv = uv;
      vBary = bary;

      vec3 newpos = position;

      float o = 1. - offset;
      float prog = clamp((progress - o * 0.6) / 0.4, 0., 1.);
      vProgress = prog;
      vProgress1 = clamp((progress - clamp(o - 0.1, -0., 1.) * 0.9) / 0.1, 0., 1.);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
    }
  `,
      fragment: /* glsl */ `
    ${fragmentCommon}
    varying float vProgress;
    varying float vProgress1;
    ${PI}
    varying vec3 vBary;
    void main()	{
      float width = 2.5 * vProgress1;
      vec3 d;
      #ifdef GL_OES_standard_derivatives
        d = fwidth(vBary);
      #endif
      vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), vBary);
      float alpha = max(max(s.x, s.y), s.z);
      vec3 color = vec3(alpha);

      vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
      vec4 t = texture2D(texture1, newUV);
      float opa = smoothstep(1., 0.5, vProgress);
      opa = 1. - vProgress;
      gl_FragColor = vec4(t.rgb + 1. * color * vProgress1, opa);
    }
  `,
    };

    const polygonsWind = {
      uniforms: {},
      detail: 40,
      offsetTop: 1,
      vertex: /* glsl */ `
    ${vertexCommon}
    attribute vec3 control0;
    attribute vec3 control1;

    ${vertexRotate}

    float easeOut(float t){
      return  t * t * t;
    }

    vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
      return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
    }

    void main() {
      ${PI}
      vUv = uv;
      vBary = bary;

      vec3 newpos = position;

      float o = 1. - offset;
      float prog = clamp((progress - o * 0.6) / 0.4, 0., 1.);
      vProgress = prog;
      vProgress1 = clamp((progress - clamp(o - 0.2, -0., 1.) * 0.6) / 0.4, 0., 1.);
      newpos = bezier4(newpos, control0, control1, newpos, easeOut(prog));
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newpos, 1.0);
    }
  `,
      fragment: /* glsl */ `
    ${fragmentCommon}
    varying float vProgress;
    varying float vProgress1;
    ${PI}
    varying vec3 vBary;
    void main()	{
      float width = 2.5 * vProgress1;
      vec3 d;
      #ifdef GL_OES_standard_derivatives
        d = fwidth(vBary);
      #endif
      vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), vBary);
      float alpha = max(max(s.x, s.y), s.z);
      vec3 color = vec3(alpha);

      vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
      vec4 t = texture2D(texture1, newUV);
      float opa = smoothstep(1., 0.5, vProgress);
      opa = 1. - vProgress;
      gl_FragColor = vec4(vUv, 0.0, opa);
      opa = smoothstep(0.5, 1., opa);
      gl_FragColor = vec4(t.rgb + 1. * color * vProgress1, opa);
    }
  `,
    };

    const ripple = {
      uniforms: {
        radius: { value: 0.9, type: 'f', min: 0.1, max: 2 },
        width: { value: 0.35, type: 'f', min: 0, max: 1 },
      },
      fragment: /* glsl */ `
    ${fragmentCommon}
    uniform float width;
    uniform float radius;
    uniform sampler2D displacement;
    float parabola( float x, float k ) {
      return pow( 4. * x * ( 1. - x ), k );
    }
    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
      vec2 p = newUV;
      vec2 start = vec2(0.5,0.5);
      vec2 aspect = resolution.wz;
      vec2 uv = newUV;
      float dt = parabola(progress, 1.);
      vec4 noise = texture2D(displacement, fract(vUv+time*0.04));
      float prog = progress*0.66 + noise.g * 0.04;
      float circ = 1. - smoothstep(-width, 0.0, radius * distance(start*aspect, uv*aspect) - prog*(1.+width));
      float intpl = pow(abs(circ), 1.);
      vec4 t1 = texture2D( texture1, (uv - 0.5) * (1.0 - intpl) + 0.5 ) ;
      vec4 t2 = texture2D( texture2, (uv - 0.5) * intpl + 0.5 );
      gl_FragColor = mix( t1, t2, intpl );
    }
  `,
    };

    const shutters = {
      uniforms: {
        intensity: { value: 50, type: 'f', min: 1, max: 100 },
      },
      fragment: /* glsl */ `
    ${fragmentCommon}
    uniform float intensity;
    mat2 rotate(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }
    const float PI = 3.1415;
    const float angle1 = PI *0.25;
    const float angle2 = PI *0.25;

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      vec2 uvDivided = fract(newUV*vec2(intensity,1.));

      vec2 uvDisplaced1 = newUV + rotate(angle1)*uvDivided*progress*0.1;
      vec2 uvDisplaced2 = newUV + rotate(angle2)*uvDivided*(1. - progress)*0.1;

      vec4 t1 = texture2D(texture1,uvDisplaced1);
      vec4 t2 = texture2D(texture2,uvDisplaced2);

      gl_FragColor = mix(t1, t2, progress);
    }

  `,
    };

    const slices = {
      uniforms: {
        size: { value: 0.25, type: 'f', min: 0.1, max: 1 },
      },
      fragment: /* glsl */ `
    ${fragmentCommon}
    uniform float size; // = 0.2
    float count = 20.; // = 10.0
    float smoothness = .5; // = 0.5
    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      float pr = smoothstep(-smoothness, 0.0, newUV.x - progress * (1.0 + smoothness));
      float s = step(pr, fract(count * newUV.x));

      vec2 uv1 = newUV;
      vec2 uv2 = newUV;

      vec4 t1 = texture2D(texture1,uv1);
      vec4 t2 = texture2D(texture2,uv2);
      gl_FragColor = mix(t1, t2, s);

    }
  `,
    };

    const squares = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    ivec2 squares = ivec2(10,10);
    vec2 direction = vec2(1.0, -0.5);
    float smoothness = 1.6;

    const vec2 center = vec2(0.5, 0.5);
    void main() {
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      vec2 v = normalize(direction);
      v /= abs(v.x)+abs(v.y);
      float d = v.x * center.x + v.y * center.y;
      float offset = smoothness;
      float pr = smoothstep(-offset, 0.0, v.x * newUV.x + v.y * newUV.y - (d-0.5+progress*(1.+offset)));
      vec2 squarep = fract(newUV*vec2(squares));
      vec2 squaremin = vec2(pr/2.0);
      vec2 squaremax = vec2(1.0 - pr/2.0);
      float a = (1.0 - step(progress, 0.0)) * step(squaremin.x, squarep.x) * step(squaremin.y, squarep.y) * step(squarep.x, squaremax.x) * step(squarep.y, squaremax.y);

      vec2 uv1 = newUV;
      vec2 uv2 = newUV;

      vec4 t1 = texture2D(texture1,newUV);
      vec4 t2 = texture2D(texture2,newUV);

      gl_FragColor = mix(t1, t2, a);
    }
  `,
    };

    const stretch = {
      uniforms: {
        intensity: { value: 50, type: 'f', min: 1, max: 100 },
      },
      fragment: /* glsl */ `
    ${fragmentCommon}
    uniform float intensity;
    mat2 rotate(float a) {
      float s = sin(a);
      float c = cos(a);
      return mat2(c, -s, s, c);
    }
    const float PI = 3.1415;
    const float angle1 = PI *0.25;
    const float angle2 = -PI *0.75;
    const float noiseSeed = 2.;
    float random() {
      return fract(sin(noiseSeed + dot(gl_FragCoord.xy / resolution.xy / 10.0, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    float hash(float n) { return fract(sin(n) * 1e4); }
    float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
    float hnoise(vec2 x) {
      vec2 i = floor(x);
      vec2 f = fract(x);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      float hn = hnoise(newUV.xy * resolution.xy / 100.0);
      vec2 d = vec2(0.,normalize(vec2(0.5,0.5) - newUV.xy).y);
      vec2 uv1 = newUV + d * progress / 5.0 * (1.0 + hn / 2.0);
      vec2 uv2 = newUV - d * (1.0 - progress) / 5.0 * (1.0 + hn / 2.0);
      vec4 t1 = texture2D(texture1,uv1);
      vec4 t2 = texture2D(texture2,uv2);
      gl_FragColor = mix(t1, t2, progress);
    }
  `,
    };

    const waveX = {
      uniforms: {
        // width: {value: 0.35, type:'f', min:0., max:1},
      },
      fragment: /* glsl */ `
  ${fragmentCommon}
  uniform sampler2D displacement;
  vec2 mirrored(vec2 v) {
    vec2 m = mod(v,2.);
    return mix(m,2.0 - m, step(1.0 ,m));
  }
  void main()	{
    vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    vec4 noise = texture2D(displacement, mirrored(newUV+time*0.04));
    float prog = (1.0 - progress)*0.8 -0.05 + noise.g * 0.06;
    float intpl = pow(abs(smoothstep(0., 1., (prog*2. - vUv.x + 0.5))), 10.);

    vec4 t1 = texture2D( texture2, (newUV - 0.5) * (1.0 - intpl) + 0.5 ) ;
    vec4 t2 = texture2D( texture1, (newUV - 0.5) * intpl + 0.5 );
    gl_FragColor = mix( t1, t2, intpl );
  }
  `,
    };

    const wind = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    float size = 0.2;

    float rand (vec2 co) {
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      float r = rand(vec2(0, newUV.y));
      float m = smoothstep(0.0, -size, newUV.x*(1.0-size) + size*r - ((progress) * (1.0 + size)));

      vec2 uv1 = newUV;
      vec2 uv2 = newUV;

      vec4 t1 = texture2D(texture1,uv1);
      vec4 t2 = texture2D(texture2,uv2);
      gl_FragColor = mix(t1, t2, m);

    }
  `,
    };

    const dots = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    const float SQRT_2 = 1.414213562373;
    const vec2 center = vec2(0, 0);// = vec2(0, 0);
    const float dots = 20.0;// = 20.0;

    vec4 getFromColor(vec2 p) {
      return texture2D(texture1, p);
    }

    vec4 getToColor(vec2 p) {
      return texture2D(texture2, p);
    }

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      bool nextImage = distance(fract(newUV * dots), vec2(0.5, 0.5)) < ( progress / distance(newUV, center));
      gl_FragColor = nextImage ? getToColor(newUV) : getFromColor(newUV);
    }

  `,
    };

    const flyeye = {
      uniforms: {},
      fragment: /* glsl */ `
    ${fragmentCommon}
    const float size = 0.04; // = 0.04
    const float zoom = 100.0; // = 50.0
    const float colorSeparation = 0.3; // = 0.3

    vec4 getFromColor(vec2 p) {
      return texture2D(texture1, p);
    }

    vec4 getToColor(vec2 p) {
      return texture2D(texture2, p);
    }

    void main()	{
      vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

      float inv = 1. - progress;
      vec2 disp = size*vec2(cos(zoom*newUV.x), sin(zoom*newUV.y));
      vec4 texTo = getToColor(newUV + inv*disp);
      vec4 texFrom = vec4(
        getFromColor(newUV + progress*disp*(1.0 - colorSeparation)).r,
        getFromColor(newUV + progress*disp).g,
        getFromColor(newUV + progress*disp*(1.0 + colorSeparation)).b,
        1.0);
      gl_FragColor = texTo*progress + texFrom*inv;
    }

  `,
    };

    // prettier-ignore
    const shaders = {
      'dots': dots,
      'flyeye': flyeye,
      'morph-x': morphX,
      'morph-y': morphY,
      'page-curl': pageCurl,
      'peel-x': peelX,
      'peel-y': peelY,
      'polygons-fall': polygonsFall,
      'polygons-morph': polygonsMorph,
      'polygons-wind': polygonsWind,
      'pixelize': pixelize,
      'ripple': ripple,
      'shutters': shutters,
      'slices': slices,
      'squares': squares,
      'stretch': stretch,
      'wave-x': waveX,
      'wind': wind,
    };

    const defaultVertex = `
attribute vec2 uv;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

    const getRandomShader = (arr, opts) => {
      const { shaderPerSlide, swiper } = opts;
      const index = swiper.params.loop ? swiper.realIndex : swiper.activeIndex;
      let allShaders = shaders;
      if (Array.isArray(arr) && arr.length) {
        if (shaderPerSlide) {
          if (typeof arr[index] === 'undefined') return shaders[arr[0]];
          return shaders[arr[index]];
        }
        allShaders = {};
        Object.keys(shaders).forEach((key) => {
          if (arr.includes(key)) allShaders[key] = shaders[key];
        });
      }
      const keyIndex = Math.floor(Math.random() * Object.keys(allShaders).length);
      return allShaders[Object.keys(allShaders)[keyIndex]];
    };

    class GL {
      constructor(opts) {
        const shader =
          opts.shader === 'random' || Array.isArray(opts.shader)
            ? getRandomShader(opts.shader, opts)
            : shaders[opts.shader];
        this.shader = shader;
        this.displacement = opts.displacementMap || displacement;
        this.scene = new Transform();
        this.swiper = opts.swiper;
        this.vertex = shader.vertex || defaultVertex;
        this.fragment = shader.fragment;
        this.uniforms = shader.uniforms || {};
        this.renderer = new Renderer({ dpr: 2, webgl: 2, alpha: true });
        this.gl = this.renderer.gl;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setSize(this.width, this.height);
        this.gl.clearColor(1, 1, 1, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.opts = opts;

        this.container = this.swiper.el;
        this.displacementTexture = null;

        this.width = this.swiper.width;
        this.height = this.swiper.height;
        if (this.swiper.isElement) {
          this.gl.canvas.setAttribute('slot', 'container-start');
        }
        this.container.prepend(this.gl.canvas);

        this.camera = new Camera(this.gl, { fov: 45 });
        this.camera.perspective({
          aspect: this.gl.canvas.width / this.gl.canvas.height,
        });

        this.camera.position.set(0, 0, 2);
        this.time = 0;
        this.current = 0;

        this.init(() => {
          this.addObjects();
          this.resize();
          this.render();
        });
      }

      animateUniform(uniform, targetValue, cb) {
        const startPosition = uniform.value;
        let startTime = null;
        let time;

        window.cancelAnimationFrame(this.animateUniformFrame);

        const dir = targetValue > uniform.value ? 'next' : 'prev';

        const isOutOfBound = (current, target) =>
          (dir === 'next' && current >= target) ||
          (dir === 'prev' && current <= target);

        const animate = () => {
          if (this.destroyed) return;
          time = new Date().getTime();
          if (startTime === null) {
            startTime = time;
          }

          const progress = Math.max(
            Math.min((time - startTime) / this.swiper.params.speed, 1),
            0,
          );
          const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
          let currentPosition =
            startPosition + easeProgress * (targetValue - startPosition);

          if (isOutOfBound(currentPosition, targetValue)) {
            currentPosition = targetValue;
          }
          uniform.value = currentPosition;
          if (isOutOfBound(currentPosition, targetValue)) {
            cancelAnimationFrame(this.animateUniformFrame);
            if (cb) cb();
            return;
          }
          this.animateUniformFrame = requestAnimationFrame(animate);
        };
        animate();
      }

      loadTextures() {
        const promises = [];
        const that = this;
        this.images = [];
        this.textures = [];

        this.container.querySelectorAll('.swiper-gl-image').forEach((img) => {
          this.images.push(img.src);
        });

        this.images.forEach((url, i) => {
          const promise = new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const texture = new Texture(this.gl);
            img.onload = () => {
              texture.image = img;
              that.textures[i] = texture;
              resolve();
            };
            img.src = url;
          });
          promises.push(promise);
        });
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const texture = new Texture(this.gl);
            img.onload = () => {
              texture.image = img;
              that.displacementTexture = texture;
              resolve();
            };
            img.src = displacement;
          }),
        );

        return Promise.all(promises);
      }

      init(cb) {
        this.loadTextures().then(() => {
          this.initialized = true;
          if (this.onInit) this.onInit();
          cb();
        });
      }

      resize() {
        if (!this.initialized || this.destroyed) return;
        const { width, height } = this.swiper;
        this.width = width;
        this.height = height;
        this.renderer.setSize(width, height);
        const dist = this.camera.position.z;

        this.camera.perspective({
          aspect: width / height,
          fov: 2 * (180 / Math.PI) * Math.atan(1 / (2 * dist)),
        });
        if (!this.textures[0].image) return;
        const imageAspect =
          this.textures[0].image.height / this.textures[0].image.width;
        let a1;
        let a2;
        if (height / width > imageAspect) {
          a1 = (width / height) * imageAspect;
          a2 = 1;
        } else {
          a1 = 1;
          a2 = height / width / imageAspect;
        }

        this.material.uniforms.resolution.value.x = width;
        this.material.uniforms.resolution.value.y = height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;

        if (this.shader.vertex && this.vertexMaterial) {
          this.vertexMaterial.uniforms.resolution.value.x = width;
          this.vertexMaterial.uniforms.resolution.value.y = height;
          this.vertexMaterial.uniforms.resolution.value.z = a1;
          this.vertexMaterial.uniforms.resolution.value.w = a2;
        }

        if (this.shader.vertex) {
          this.nextMesh.scale.set(this.camera.aspect / 2, 1 / 2, 1 / 2);
          this.currentMesh.scale.set(this.camera.aspect / 2, 1 / 2, 1 / 2);
        } else {
          this.plane.scale.x = this.camera.aspect;
          this.plane.scale.y = 1;
        }
      }

      createMaterial() {
        return new Program(this.gl, {
          extensions: {
            derivatives: '#extension GL_OES_standard_derivatives : enable',
          },
          // side: DoubleSide,
          uniforms: {
            time: { type: 'f', value: 0 },
            progress: { type: 'f', value: 0 },
            intensity: { type: 'f', value: 0 },
            width: { type: 'f', value: 0 },
            radius: { type: 'f', value: 0 },
            size: { type: 'f', value: 0 },
            texture1: { type: 'f', value: this.textures[0] },
            texture2: { type: 'f', value: this.textures[1] },

            displacement: {
              type: 'f',
              value: this.displacementTexture,
            },
            resolution: { type: 'v4', value: new Vec4() },
          },
          vertex: this.shader.vertex || defaultVertex,
          fragment: this.shader.fragment,
          ...(this.shader.vertex
            ? {
                transparent: true,
                depthWrite: false,
              }
            : {}),
        });
      }

      addObjects() {
        this.scene.children.forEach((child) => {
          this.scene.removeChild(child);
        });
        this.scene.children.forEach((child) => {
          this.scene.removeChild(child);
        });
        this.material = this.createMaterial();

        if (this.shader.vertex) {
          const geometry = getGeometry(
            this.gl,
            this.shader.detail,
            this.shader.offsetTop,
          );
          const texture = this.textures[1];
          this.vertexMaterial = this.createMaterial();
          this.vertexMaterial.uniforms.texture1.value = texture;
          this.currentMesh = new Mesh(this.gl, {
            geometry,
            program: this.material,
          });
          this.nextMesh = new Mesh(this.gl, {
            geometry,
            program: this.vertexMaterial,
          });
          this.nextMesh.position.z = -0.0001;
          this.currentMesh.setParent(this.scene);
          this.nextMesh.setParent(this.scene);
        } else {
          const geometry = new Plane(this.gl, {
            width: 1,
            height: 1,
            widthSegments: 2,
            heightSegments: 2,
          });
          this.plane = new Mesh(this.gl, { geometry, program: this.material });
          this.plane.setParent(this.scene);
        }
      }

      replaceShader(newShaderName) {
        let fromTexture;
        let newTexture;
        if (this.shader.vertex) {
          fromTexture = this.material.uniforms.texture1.value;
          newTexture = this.vertexMaterial.uniforms.texture1.value;
        } else {
          fromTexture = this.material.uniforms.texture1.value;
          newTexture = this.material.uniforms.texture2.value;
        }
        const shader =
          newShaderName === 'random' || Array.isArray(newShaderName)
            ? getRandomShader(newShaderName, this.opts)
            : shaders[newShaderName];
        const { fragment, uniforms, vertex } = shader;
        this.shader = shader;
        this.vertex = vertex || defaultVertex;
        this.fragment = fragment || ``;
        this.uniforms = uniforms || {};
        this.addObjects();
        if (this.shader.vertex) {
          this.material.uniforms.texture1.value = newTexture;
          this.vertexMaterial.uniforms.texture1.value = newTexture;
        } else {
          this.material.uniforms.texture1.value = fromTexture;
          this.material.uniforms.texture2.value = newTexture;
          this.material.uniforms.progress.value = 1;
        }

        this.resize();
        this.swiper.params.gl.shader = newShaderName;
      }

      replaceRandomShader() {
        const shader = getRandomShader(this.opts.shader, this.opts);
        const { fragment, uniforms, vertex } = shader;
        this.shader = shader;
        this.fragment = fragment || ``;
        this.uniforms = uniforms || {};
        this.vertex = vertex || defaultVertex;
        this.addObjects();
        this.resize();
      }

      setProgress(
        fromIndex,
        toIndex,
        progress,
        needsTransitionDuration,
        needShaderReplace,
      ) {
        if (this.destroyed || this.swiper.glDestroyed) return;
        if (!this.initialized) {
          this.onInit = () => {
            requestAnimationFrame(() => {
              this.setProgress(
                fromIndex,
                toIndex,
                progress,
                needsTransitionDuration,
              );
            });
          };
          return;
        }
        if (
          this.swiper.params.loop &&
          this.swiper.slides[fromIndex] &&
          this.swiper.slides[toIndex]
        ) {
          fromIndex = parseInt(
            this.swiper.slides[fromIndex].getAttribute('data-swiper-slide-index'),
            10,
          );
          toIndex = parseInt(
            this.swiper.slides[toIndex].getAttribute('data-swiper-slide-index'),
            10,
          );
        }
        const newTexture = this.textures[toIndex];
        const fromTexture = this.textures[fromIndex];

        this.material.uniforms.texture1.value = fromTexture;
        if (!this.shader.vertex) {
          this.material.uniforms.texture2.value = newTexture;
        } else {
          this.vertexMaterial.uniforms.texture1.value = newTexture;
        }
        if (needShaderReplace) {
          if (this.preventShaderReplace) {
            this.material.uniforms.progress.value = Math.abs(progress);
            return;
          }
          this.preventShaderReplace = true;
          requestAnimationFrame(() => {
            this.preventShaderReplace = false;
          });

          if (
            this.swiper.params.gl.shader === 'random' ||
            Array.isArray(this.swiper.params.gl.shader)
          ) {
            this.replaceRandomShader();
            this.material.uniforms.texture1.value = fromTexture;
            this.material.uniforms.texture2.value = newTexture;
            this.material.uniforms.progress.value = Math.abs(progress);
          } else {
            this.material.uniforms.progress.value = Math.abs(progress);
          }
        } else if (needsTransitionDuration) {
          if (progress === 0 && this.material.uniforms.progress.value === 0) {
            this.material.uniforms.progress.value = 1;
          }
          if (progress === 1 && this.material.uniforms.progress.value === 1) {
            this.material.uniforms.progress.value = 0;
          }
          this.animateUniform(this.material.uniforms.progress, progress, () => {
            if (
              this.swiper.params.gl.shader === 'random' ||
              Array.isArray(this.swiper.params.gl.shader)
            ) {
              this.replaceRandomShader();
              this.material.uniforms.texture1.value = fromTexture;
              this.material.uniforms.texture2.value = newTexture;
              this.material.uniforms.progress.value = progress;
            }
            if (progress === 1) {
              this.material.uniforms.texture1.value = newTexture;
            }
            this.material.uniforms.progress.value = 0;
          });
        } else {
          this.material.uniforms.progress.value = Math.abs(progress);
        }
      }

      render() {
        if (this.swiper.destroyed || this.destroyed) return;
        this.time += 0.05;
        this.material.uniforms.time.value = this.time;

        Object.keys(this.uniforms).forEach((item) => {
          this.material.uniforms[item].value = this.uniforms[item].value;
        });

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render({ scene: this.scene, camera: this.camera });
      }

      destroy() {
        this.initialized = false;
        this.destroyed = true;
        if (this.gl && this.gl.canvas) this.container.removeChild(this.gl.canvas);
      }
    }

    if (typeof window !== 'undefined' && window.SwiperElementRegisterParams) {
      window.SwiperElementRegisterParams(['gl']);
    }

    function SwiperGL({ swiper, on, extendParams }) {
      swiper.gl = null;
      let noWebGLSupport = false;

      function supportsWebGL() {
        try {
          const canvas = document.createElement('canvas');
          return (
            !!window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
          );
        } catch (e) {
          return false;
        }
      }

      extendParams({
        gl: {
          shader: 'random',
          shaderPerSlide: false,
          displacementMap: undefined,
        },
      });

      const glInit = () => {
        swiper.gl = new GL({
          debug: true,
          swiper,
          shader: swiper.params.gl.shader,
          shaderPerSlide: swiper.params.gl.shaderPerSlide,
        });
      };

      let needsTransitionDuration;
      let previousProgress;

      on('beforeInit', () => {
        if (swiper.params.effect !== 'gl') return;
        if (!supportsWebGL()) {
          noWebGLSupport = true;
          return;
        }

        swiper.classNames.push(`${swiper.params.containerModifierClass}gl`);
        const overwriteParams = {
          watchSlidesProgress: true,
        };
        Object.assign(swiper.params, overwriteParams);
        Object.assign(swiper.originalParams, overwriteParams);
      });
      on('init', () => {
        if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
          return;
        if (!swiper.gl) {
          glInit();
        }
      });
      on('resize', () => {
        if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
          return;
        swiper.gl.resize();
      });

      on('setTranslate', () => {
        if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
          return;
        if (!swiper.gl) {
          glInit();
        }
        let from;
        let to;
        let transitionProgress;
        let needShaderReplace = false;
        swiper.slides.forEach((slideEl, slideIndex) => {
          // eslint-disable-next-line
          const progress = slideEl.progress;
          if (swiper.params.cssMode && Math.round(progress * 100) === 0) {
            needShaderReplace = true;
          }
          if (
            (progress > 0 && progress < 1) ||
            (progress === 0 && swiper.progress < previousProgress)
          ) {
            from = slideIndex;
            to = slideIndex + 1;
            transitionProgress = progress;
          }
          if (
            (progress < 0 && progress > -1) ||
            (progress === 0 && swiper.progress > previousProgress)
          ) {
            from = slideIndex - 1;
            to = slideIndex;
            transitionProgress = 1 + progress;
          }
        });

        previousProgress = swiper.progress || 0;
        if (typeof from === 'undefined' && typeof to === 'undefined') {
          return;
        }
        needShaderReplace =
          needShaderReplace &&
          Math.round(transitionProgress) === transitionProgress;
        swiper.gl.setProgress(
          from,
          to,
          transitionProgress,
          needsTransitionDuration,
          needShaderReplace,
        );
      });
      on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== 'gl' || noWebGLSupport || swiper.glDestroyed)
          return;
        needsTransitionDuration = duration > 0 && !swiper.params.cssMode;
      });
      on('slidesGridLengthChange', () => {
        if (
          swiper.params.effect !== 'gl' ||
          noWebGLSupport ||
          !swiper.initialized ||
          swiper.glDestroyed
        )
          return;
        if (swiper.gl && swiper.gl.loadTextures) {
          swiper.gl.loadTextures();
        }
      });
      on('beforeDestroy', () => {
        if (swiper.params.effect !== 'gl' || noWebGLSupport) return;
        if (swiper.gl) {
          swiper.glDestroyed = true;
          swiper.gl.destroy();
          swiper.gl = null;
        }
      });
    }

    return SwiperGL;

}));
//# sourceMappingURL=swiper-gl.js.map
